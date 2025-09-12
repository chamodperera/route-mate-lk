import { Button } from "@/components/ui/button";
import { ArrowDown, Smartphone } from "lucide-react";
import heroPhoneMockup from "@/assets/hero-phone-mockup.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-display mb-6 text-primary">
              Transforming public transport in Sri Lanka
            </h1>
            
            <p className="text-large mb-8 text-muted-foreground max-w-2xl">
              Live bus locations, accurate arrival times, crowd levels, and easy bookings for long-distance routes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" asChild>
                <a href="#download" className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5" />
                  Download on Google Play
                </a>
              </Button>
              
              <Button variant="learn" size="xl" asChild>
                <a href="#features" className="flex items-center gap-3">
                  Learn more
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success animate-pulse"></div>
                Live tracking
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse"></div>
                Real-time updates
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <img
                src={heroPhoneMockup}
                alt="RouteMate app interface showing live bus tracking"
                className="w-full max-w-md h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;