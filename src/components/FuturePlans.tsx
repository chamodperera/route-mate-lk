import { CreditCard, Camera, Brain } from "lucide-react";

const FuturePlans = () => {
  const plans = [
    {
      icon: CreditCard,
      title: "Smart Ticketing & Cashless Payments",
      description: "QR codes, cards, mobile wallets for seamless transactions.",
      status: "Coming Soon"
    },
    {
      icon: Camera,
      title: "Enhanced Crowd Management with CCTV + AI",
      description: "Accurate, real-time seat availability using computer vision.",
      status: "In Development"
    },
    {
      icon: Brain,
      title: "AI-Powered Driver Monitoring",
      description: "Detect fatigue or unsafe driving behavior to improve safety.",
      status: "Research Phase"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6 text-primary">Future Plans</h2>
            <p className="text-large text-muted-foreground">
              Continuous innovation for the future of public transport
            </p>
          </div>
          
          <div className="space-y-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 bg-card rounded-xl shadow-elegant hover-lift animate-fade-in border border-border/50"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                    <plan.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-primary">{plan.title}</h3>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                      {plan.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;