import { AlertTriangle, Clock, Users } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Users,
      text: "2M+ daily bus commuters without reliable real-time information"
    },
    {
      icon: AlertTriangle,
      text: "No unified tracking across government & private operators"
    },
    {
      icon: Clock,
      text: "Inefficiency, uncertainty, and wasted time for passengers"
    }
  ];

  return (
    <section id="problem" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section mb-4 text-primary">The Problem</h2>
          <p className="text-large mb-12 text-muted-foreground">
            Sri Lanka's public transport system faces critical challenges
          </p>
          
          <div className="grid gap-8 md:gap-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-card rounded-xl shadow-elegant hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <problem.icon className="h-8 w-8 text-destructive" />
                  </div>
                </div>
                <p className="text-large text-center sm:text-left text-foreground">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;