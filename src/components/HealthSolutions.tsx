import React from 'react';
import { Zap, Activity, Shield, Flame, Scale, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HealthSolutions = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Erectile Dysfunction",
      description: "Restore confidence with proven ED treatments including FDA-approved medications and advanced therapies.",
      features: ["Sildenafil & Tadalafil", "Personalized dosing", "Discreet delivery", "Ongoing support"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Activity,
      title: "Hair Loss Treatment",
      description: "Combat male pattern baldness with cutting-edge treatments that actually work.",
      features: ["Finasteride & Minoxidil", "Hair transplant referrals", "Progress tracking", "Custom solutions"],
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Shield,
      title: "Hormone Therapy",
      description: "Optimize your testosterone levels for peak energy, strength, and mental clarity.",
      features: ["TRT options", "Regular monitoring", "Lifestyle guidance", "Safety protocols"],
      gradient: "from-secondary to-primary"
    },
    {
      icon: Flame,
      title: "Vitality & Energy",
      description: "Reclaim your youthful vigor with comprehensive energy optimization programs.",
      features: ["Energy supplements", "Nutritional guidance", "Sleep optimization", "Stress management"],
      gradient: "from-destructive to-accent"
    },
    {
      icon: Scale,
      title: "Weight Management",
      description: "Achieve your ideal physique with medically-supervised weight loss programs.",
      features: ["Semaglutide therapy", "Custom meal plans", "Exercise protocols", "Regular check-ins"],
      gradient: "from-accent to-primary"
    },
    {
      icon: Dumbbell,
      title: "Performance Enhancement",
      description: "Maximize your physical and mental performance for peak life experiences.",
      features: ["Athletic enhancement", "Cognitive support", "Recovery optimization", "Performance tracking"],
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Health Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From sexual wellness to vitality optimization, we provide comprehensive treatments 
            that address every aspect of modern men's health challenges.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-strong transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6 shadow-medium`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a confidential consultation with our men's health specialists today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSolutions;