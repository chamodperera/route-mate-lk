import { Layers, User, Smartphone } from "lucide-react";

const Solution = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Unified Platform",
      description: "One app for real-time info and services"
    },
    {
      icon: User,
      title: "Personalized Experience", 
      description: "Alerts and routes tailored to you"
    },
    {
      icon: Smartphone,
      title: "Intuitive Design",
      description: "Fast, simple, friendly UI"
    }
  ];

  return (
    <section id="solution" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-6 text-primary">Our Solution — RouteMate</h2>
          <p className="text-large mb-16 text-muted-foreground max-w-3xl mx-auto">
            A mobile-first app delivering real-time bus visibility and a smoother, safer commute.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group p-8 bg-card rounded-xl shadow-elegant hover-lift animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-accent flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  <pillar.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;