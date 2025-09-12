import { Button } from "@/components/ui/button";
import { Smartphone, Mail } from "lucide-react";

const Download = () => {
  return (
    <section id="download" className="py-16 lg:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-hero mb-6 text-primary">Ready to ride smarter?</h2>
            <p className="text-large mb-12 text-muted-foreground max-w-2xl mx-auto">
              Download RouteMate now and join thousands of commuters who have transformed their daily travel experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                <a href="#" className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6" />
                  Get it on Google Play
                </a>
              </Button>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:hello@rysera.com" className="hover:text-accent transition-colors">
                  hello@rysera.com
                </a>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-accent mb-2">100K+</div>
                <p className="text-muted-foreground">Downloads expected</p>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-success mb-2">24/7</div>
                <p className="text-muted-foreground">Real-time tracking</p>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-accent mb-2">2M+</div>
                <p className="text-muted-foreground">Commuters served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;