import { Search, MapPin, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find your bus",
      description: "Search route or stop"
    },
    {
      icon: MapPin,
      title: "Track live",
      description: "See ETA, crowd level, route updates"
    },
    {
      icon: CheckCircle,
      title: "Ride smarter",
      description: "Get alerts, report issues, recover lost items"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-6 text-primary">How It Works</h2>
          <p className="text-large mb-16 text-muted-foreground">
            Three simple steps to transform your commute
          </p>
          
          <div className="grid gap-8 md:grid-cols-3 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center relative">
                    <step.icon className="h-10 w-10 text-accent-foreground" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent to-accent/30 transform translate-x-4 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;