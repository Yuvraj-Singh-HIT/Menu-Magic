import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { cuisine } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log(`Generating restaurant for cuisine: ${cuisine}`);

    // Step 1: Generate restaurant name
    const nameResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are a creative restaurant naming expert. Return ONLY the restaurant name, nothing else. No quotes, no explanation."
          },
          {
            role: "user",
            content: `I want to open a restaurant for ${cuisine} food. Suggest a fancy, elegant, and memorable name for this restaurant.`
          }
        ],
      }),
    });

    if (!nameResponse.ok) {
      const errorText = await nameResponse.text();
      console.error("Name generation error:", nameResponse.status, errorText);
      
      if (nameResponse.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (nameResponse.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("Failed to generate restaurant name");
    }

    const nameData = await nameResponse.json();
    const restaurantName = nameData.choices?.[0]?.message?.content?.trim() || "The Gourmet Kitchen";

    console.log(`Generated restaurant name: ${restaurantName}`);

    // Step 2: Generate menu items
    const menuResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: "You are a gourmet chef creating menu items. Return ONLY the dish names as a comma-separated list. No descriptions, no prices, no explanations. Just dish names separated by commas."
          },
          {
            role: "user",
            content: `Suggest 6 signature menu items for a ${cuisine} restaurant called "${restaurantName}". Return only dish names separated by commas.`
          }
        ],
      }),
    });

    if (!menuResponse.ok) {
      const errorText = await menuResponse.text();
      console.error("Menu generation error:", menuResponse.status, errorText);
      throw new Error("Failed to generate menu items");
    }

    const menuData = await menuResponse.json();
    const menuItemsRaw = menuData.choices?.[0]?.message?.content?.trim() || "";
    const menuItems = menuItemsRaw.split(",").map((item: string) => item.trim()).filter((item: string) => item.length > 0);

    console.log(`Generated menu items: ${menuItems.join(", ")}`);

    return new Response(
      JSON.stringify({
        restaurantName,
        menuItems,
        cuisine
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in generate-menu function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
