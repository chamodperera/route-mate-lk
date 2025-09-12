import { Users, Smartphone, TrendingUp } from "lucide-react";

const Market = () => {
  const stats = [
    {
      icon: Users,
      number: "2M+",
      label: "daily commuters in Sri Lanka"
    },
    {
      icon: Smartphone,
      number: "Growing",
      label: "smartphone penetration"
    },
    {
      icon: TrendingUp,
      number: "High",
      label: "readiness for unified platform"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-12 text-primary-foreground">Market Opportunity</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;