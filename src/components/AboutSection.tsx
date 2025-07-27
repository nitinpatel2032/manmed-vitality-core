import React from 'react';
import { Target, Heart, Brain, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Medicine",
      description: "Tailored treatments based on your unique health profile and goals"
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Understanding and discreet approach to sensitive men's health issues"
    },
    {
      icon: Brain,
      title: "Expert Knowledge",
      description: "Board-certified specialists with decades of men's health experience"
    },
    {
      icon: Star,
      title: "Proven Results",
      description: "98% patient satisfaction rate with measurable health improvements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Redefining{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Men's Health
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At ManMed Health, we understand that men's health goes beyond treating symptoms. 
              We focus on empowering you with comprehensive solutions that restore your vitality, 
              confidence, and peak performance in every aspect of life.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2 mt-1">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Personalized Approach</h3>
                  <p className="text-muted-foreground">Every treatment plan is customized to your specific needs and lifestyle.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 rounded-lg p-2 mt-1">
                  <Heart className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Confidential & Secure</h3>
                  <p className="text-muted-foreground">Your privacy is our priority with HIPAA-compliant telemedicine options.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="gap-2">
              Learn More About Us
            </Button>
          </div>

          {/* Right Content - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-gradient-card border border-border rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="animate-scale-in animation-delay-200">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-muted-foreground">Men Treated</div>
          </div>
          <div className="animate-scale-in animation-delay-400">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="animate-scale-in animation-delay-600">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;