import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Which areas does RouteMate cover?",
      answer: "RouteMate is launching with coverage in major Sri Lankan cities including Colombo, Kandy, and Galle. We're rapidly expanding to cover all major bus routes across the island with partnerships from both government and private operators."
    },
    {
      question: "How accurate is the real-time bus tracking data?",
      answer: "Our tracking system uses GPS technology integrated with bus operators' systems to provide location updates every 30 seconds. The accuracy depends on GPS signal strength but typically provides location data within 50 meters of the actual bus position."
    },
    {
      question: "How does RouteMate protect user privacy and data security?",
      answer: "We implement end-to-end encryption for all user data, comply with international data protection standards, and only collect essential information needed for service delivery. Your location data is anonymized and never shared with third parties without explicit consent."
    },
    {
      question: "How does the driver condition reporting system work?",
      answer: "Passengers can report driver behavior through the app with options for different incident types. Other passengers on the same route can confirm reports, creating a transparent history. All reports are reviewed by our moderation team before being added to driver profiles."
    },
    {
      question: "How can bus owners and operators join the RouteMate platform?",
      answer: "Bus operators can join by contacting our partnerships team at hello@rysera.com. We provide free onboarding, GPS tracking device installation, and access to our analytics dashboard to help improve service quality and ridership."
    },
    {
      question: "Is RouteMate free to use for passengers?",
      answer: "Yes, RouteMate is completely free for passengers. We generate revenue through partnerships with bus operators who benefit from increased ridership and operational insights. Premium features like reserved seating may have small fees in the future."
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section mb-6 text-primary">Frequently Asked Questions</h2>
            <p className="text-large text-muted-foreground">
              Everything you need to know about RouteMate
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card shadow-elegant animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;