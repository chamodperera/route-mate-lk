import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-bold text-primary hover:text-primary-glow transition-colors">
              RouteMate
            </a>
          </div>
          
          <Button variant="appstore" size="default" asChild className="hidden sm:inline-flex">
            <a href="#download" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Get it on Google Play
            </a>
          </Button>
          
          <Button variant="appstore" size="sm" asChild className="sm:hidden">
            <a href="#download">
              <Smartphone className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;