import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CuisineSelector } from "@/components/CuisineSelector";
import { MenuCard } from "@/components/MenuCard";
import { LoadingState } from "@/components/LoadingState";
import { useMenuGenerator } from "@/hooks/useMenuGenerator";
import { Sparkles, RotateCcw, ChefHat } from "lucide-react";

const Index = () => {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const { isLoading, result, error, generateMenu, reset } = useMenuGenerator();

  const handleGenerate = () => {
    if (selectedCuisine) {
      generateMenu(selectedCuisine);
    }
  };

  const handleReset = () => {
    setSelectedCuisine(null);
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 opacity-0 animate-fade-up">
              <ChefHat className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Menu Generator</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
              Create Your Dream{" "}
              <span className="text-gradient-gold">Restaurant</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-up stagger-2 font-body">
              Select a cuisine and let AI craft a unique restaurant name with a curated signature menu.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24">
        {!result && !isLoading && (
          <section className="max-w-5xl mx-auto">
            <div className="text-center mb-8 opacity-0 animate-fade-up stagger-3">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Choose Your Cuisine
              </h2>
              <p className="text-muted-foreground">
                Select a culinary tradition to inspire your restaurant
              </p>
            </div>

            <CuisineSelector
              selectedCuisine={selectedCuisine}
              onSelect={setSelectedCuisine}
              disabled={isLoading}
            />

            <div className="flex justify-center mt-10 opacity-0 animate-fade-up stagger-6">
              <Button
                variant="hero"
                size="xl"
                onClick={handleGenerate}
                disabled={!selectedCuisine || isLoading}
                className="min-w-[200px]"
              >
                <Sparkles className="w-5 h-5" />
                Generate Menu
              </Button>
            </div>
          </section>
        )}

        {isLoading && (
          <section className="mt-8">
            <LoadingState />
          </section>
        )}

        {result && !isLoading && (
          <section className="mt-8 space-y-8">
            <MenuCard
              restaurantName={result.restaurantName}
              menuItems={result.menuItems}
              cuisine={result.cuisine}
            />

            <div className="flex justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <Button variant="outline" size="lg" onClick={handleReset}>
                <RotateCcw className="w-4 h-4" />
                Start Over
              </Button>
              <Button variant="hero" size="lg" onClick={handleGenerate}>
                <Sparkles className="w-4 h-4" />
                Regenerate
              </Button>
            </div>
          </section>
        )}

        {error && !isLoading && !result && (
          <div className="max-w-md mx-auto mt-8 p-6 rounded-xl border border-destructive/20 bg-destructive/5 text-center">
            <p className="text-destructive font-medium mb-4">{error}</p>
            <Button variant="outline" onClick={handleReset}>
              Try Again
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by AI • Crafted with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
