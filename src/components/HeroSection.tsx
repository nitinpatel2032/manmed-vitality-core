import React from 'react';
import { ArrowRight, Shield, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ManMed Health - Men's Vitality" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Power Your{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Prime
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-200">
            Reclaim your strength, vitality, and confidence with modern men's health solutions designed for the alpha in you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-400">
            <Button variant="hero" size="xl" className="gap-3">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="premium" size="xl" className="gap-3">
              Free Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in animation-delay-600">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-white font-semibold mb-1">FDA Approved</h3>
              <p className="text-white/80 text-sm">Clinically proven treatments</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-white font-semibold mb-1">50K+ Men</h3>
              <p className="text-white/80 text-sm">Trust our expertise</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-3">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-white font-semibold mb-1">Top Rated</h3>
              <p className="text-white/80 text-sm">Excellence in men's health</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;