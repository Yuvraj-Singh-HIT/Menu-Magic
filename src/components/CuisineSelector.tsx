import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cuisines = [
  { id: "indian", label: "Indian", emoji: "🍛", description: "Rich spices & bold flavors" },
  { id: "italian", label: "Italian", emoji: "🍝", description: "Classic Mediterranean taste" },
  { id: "chinese", label: "Chinese", emoji: "🥢", description: "Ancient culinary traditions" },
  { id: "mexican", label: "Mexican", emoji: "🌮", description: "Vibrant & zesty cuisine" },
  { id: "french", label: "French", emoji: "🥐", description: "Refined gastronomy" },
];

interface CuisineSelectorProps {
  selectedCuisine: string | null;
  onSelect: (cuisine: string) => void;
  disabled?: boolean;
}

export function CuisineSelector({ selectedCuisine, onSelect, disabled }: CuisineSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cuisines.map((cuisine, index) => (
        <button
          key={cuisine.id}
          onClick={() => onSelect(cuisine.id)}
          disabled={disabled}
          className={cn(
            "group relative p-6 rounded-xl border-2 transition-all duration-300 opacity-0 animate-fade-up",
            "hover:scale-[1.02] active:scale-[0.98]",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            selectedCuisine === cuisine.id
              ? "border-primary bg-primary/5 shadow-elevated"
              : "border-border bg-card shadow-soft hover:border-primary/50 hover:shadow-card",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {cuisine.emoji}
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {cuisine.label}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {cuisine.description}
              </p>
            </div>
          </div>
          {selectedCuisine === cuisine.id && (
            <div className="absolute top-3 right-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse-soft" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
}
