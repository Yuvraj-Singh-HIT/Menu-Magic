import { Utensils } from "lucide-react";

interface MenuCardProps {
  restaurantName: string;
  menuItems: string[];
  cuisine: string;
}

export function MenuCard({ restaurantName, menuItems, cuisine }: MenuCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto opacity-0 animate-scale-in">
      {/* Restaurant Card */}
      <div className="relative overflow-hidden rounded-2xl shadow-elevated gradient-card border border-border">
        {/* Decorative header */}
        <div className="gradient-hero px-8 py-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-4">
            <Utensils className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground capitalize">
              {cuisine} Cuisine
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
            {restaurantName}
          </h2>
        </div>

        {/* Menu items */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Signature Menu
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4 opacity-0 animate-fade-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-accent-foreground font-semibold text-sm shadow-soft">
                  {index + 1}
                </span>
                <span className="font-body text-lg text-foreground">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Decorative footer */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground italic font-body">
              "Crafted with passion, served with love"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
