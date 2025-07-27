import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    'Health Solutions': [
      'Erectile Dysfunction',
      'Hair Loss Treatment',
      'Hormone Therapy',
      'Vitality Enhancement',
      'Weight Management',
      'Performance Optimization'
    ],
    'Company': [
      'About Us',
      'Our Doctors',
      'Careers',
      'Press & Media',
      'Partnerships',
      'Blog & Insights'
    ],
    'Support': [
      'Patient Portal',
      'Insurance',
      'Billing',
      'FAQ',
      'Contact Support',
      'Emergency Care'
    ],
    'Legal': [
      'Privacy Policy',
      'Terms of Service',
      'HIPAA Notice',
      'Refund Policy',
      'Medical Disclaimer',
      'Accessibility'
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-hero text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Informed, Stay Healthy</h3>
              <p className="text-white/80 text-lg">
                Get exclusive health tips, treatment updates, and special offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              <Button variant="accent" size="lg" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              ManMed Health
            </h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering men to achieve peak health, vitality, and confidence through cutting-edge medical solutions and personalized care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/90">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/90">info@manmedhealth.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/90">123 Health Plaza, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-accent/20 p-3 rounded-lg transition-colors duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-accent transition-colors duration-200 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-4 text-center">
            <h4 className="font-semibold text-white mb-2">24/7 Emergency Support</h4>
            <p className="text-white/80 text-sm mb-3">
              If you're experiencing a medical emergency, call 911 immediately. For urgent health questions, our specialists are available 24/7.
            </p>
            <Button variant="destructive" size="sm">
              Emergency Contact: (555) 911-HELP
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/70">
              <span>© 2024 ManMed Health. All rights reserved.</span>
              <Heart className="w-4 h-4 text-accent" />
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Medical Disclaimer
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition-colors">
                HIPAA Compliance
              </a>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              ManMed Health is committed to providing evidence-based treatments and maintaining the highest standards of patient care and privacy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;