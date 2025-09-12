import { Button } from "@/components/ui/button";
import { BarChart3, Users, TrendingUp } from "lucide-react";

const Operators = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-section mb-6 text-accent-foreground">For Bus Owners and Operators</h2>
            <p className="text-large mb-8 text-accent-foreground/90 max-w-3xl mx-auto">
              Improve reliability and ridership with analytics and alerts. Join the platform to transform your fleet management.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mb-12">
              <div className="flex flex-col items-center">
                <BarChart3 className="h-12 w-12 text-accent-foreground mb-3" />
                <h3 className="text-lg font-semibold text-accent-foreground mb-2">Analytics Dashboard</h3>
                <p className="text-accent-foreground/80">Track usage patterns and optimize routes</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-accent-foreground mb-3" />
                <h3 className="text-lg font-semibold text-accent-foreground mb-2">Passenger Insights</h3>
                <p className="text-accent-foreground/80">Understand demand and improve service</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-12 w-12 text-accent-foreground mb-3" />
                <h3 className="text-lg font-semibold text-accent-foreground mb-2">Increase Ridership</h3>
                <p className="text-accent-foreground/80">Attract more passengers with reliability</p>
              </div>
            </div>
            
            <Button variant="outline" size="xl" className="bg-accent-foreground text-accent border-accent-foreground hover:bg-accent-foreground/90">
              Partner with RouteMate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operators;