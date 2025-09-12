import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">RouteMate</h3>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Transforming public transport in Sri Lanka with real-time tracking, smart notifications, and community-driven features.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#features" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Features
                </a>
                <a href="#download" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Download
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </nav>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <a 
                  href="mailto:hello@rysera.com" 
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@rysera.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2024 RYSERA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;