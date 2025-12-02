import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface MenuResult {
  restaurantName: string;
  menuItems: string[];
  cuisine: string;
}

export function useMenuGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MenuResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateMenu = async (cuisine: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error: functionError } = await supabase.functions.invoke("generate-menu", {
        body: { cuisine },
      });

      if (functionError) {
        throw new Error(functionError.message || "Failed to generate menu");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setResult({
        restaurantName: data.restaurantName,
        menuItems: data.menuItems,
        cuisine: data.cuisine,
      });

      toast({
        title: "Menu Generated!",
        description: `Welcome to ${data.restaurantName}`,
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
      toast({
        title: "Generation Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return {
    isLoading,
    result,
    error,
    generateMenu,
    reset,
  };
}
