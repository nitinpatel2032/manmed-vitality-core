import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    message: '',
    newsletter: false
  });

  const concerns = [
    'Erectile Dysfunction',
    'Hair Loss',
    'Hormone Therapy',
    'Vitality & Energy',
    'Weight Management',
    'Performance Enhancement',
    'General Consultation'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll contact you within 24 hours for your confidential consultation.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      concern: '',
      message: '',
      newsletter: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Your{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Free Consultation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards reclaiming your vitality. Our specialists are here 
            to provide confidential, personalized care tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Schedule Your Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="concern" className="block text-sm font-medium text-foreground mb-2">
                      Primary Concern
                    </label>
                    <select
                      id="concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select your concern</option>
                      {concerns.map(concern => (
                        <option key={concern} value={concern}>{concern}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your health goals and any questions you have..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-5 h-5 text-primary border-2 border-input rounded focus:ring-primary"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Subscribe to our newsletter for health tips and exclusive offers
                  </label>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                      <p className="text-muted-foreground">info@manmedhealth.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 4 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                      <p className="text-muted-foreground">123 Health Plaza, Suite 200</p>
                      <p className="text-muted-foreground">Medical District, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground">Mon-Fri: 8AM - 8PM</p>
                      <p className="text-muted-foreground">Sat-Sun: 9AM - 5PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Chat CTA */}
              <div className="bg-gradient-accent rounded-2xl p-8 text-center text-white shadow-glow">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-white/90 mb-6">
                  Chat with our health specialists right now for instant answers to your questions.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-accent hover:bg-white/90">
                  Start Live Chat
                </Button>
              </div>

              {/* Privacy Notice */}
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-2">Your Privacy Matters</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All consultations are completely confidential and HIPAA-compliant. 
                  Your personal health information is secure and never shared without your consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;