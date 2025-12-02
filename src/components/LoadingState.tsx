import { ChefHat } from "lucide-react";

export function LoadingState() {
  return (
    <div className="w-full max-w-2xl mx-auto opacity-0 animate-fade-up">
      <div className="rounded-2xl shadow-card gradient-card border border-border overflow-hidden">
        {/* Header skeleton */}
        <div className="gradient-hero px-8 py-10 text-center">
          <div className="flex justify-center mb-4">
            <ChefHat className="w-12 h-12 text-primary-foreground animate-bounce" />
          </div>
          <div className="h-8 w-64 mx-auto rounded-lg animate-shimmer" />
        </div>

        {/* Content skeleton */}
        <div className="p-8 space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Generating Menu...
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full animate-shimmer" />
              <div className="h-6 flex-1 rounded-lg animate-shimmer" style={{ animationDelay: `${i * 0.1}s` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
