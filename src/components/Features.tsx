import { 
  MapPin, 
  Bell, 
  BarChart3, 
  AlertCircle, 
  Package, 
  Shield 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Bus Live Location Tracking",
      description: "View real-time bus positions to plan better and reduce waiting time."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Instant arrival, delay, and route-change alerts delivered to your phone."
    },
    {
      icon: BarChart3,
      title: "Weekly Analytics Dashboard",
      description: "Bus owners can access usage analytics to improve service quality."
    },
    {
      icon: AlertCircle,
      title: "Driver Condition Reporting",
      description: "Community-confirmed reports for safer travel with transparent driver history."
    },
    {
      icon: Package,
      title: "Lost & Found Posts",
      description: "Reunite passengers with misplaced items through community assistance."
    },
    {
      icon: Shield,
      title: "Secure & Adaptable",
      description: "Scalable platform with strong data security and reliable performance."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6 text-primary">Key Features</h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools designed to transform your daily commute experience
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-card rounded-xl shadow-elegant hover-lift animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;