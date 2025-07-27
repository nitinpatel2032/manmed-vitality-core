import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { 
      name: 'Health Solutions', 
      href: '#solutions',
      dropdown: [
        { name: 'Erectile Dysfunction', href: '#ed-treatment' },
        { name: 'Hair Loss', href: '#hair-loss' },
        { name: 'Vitality & Energy', href: '#vitality' },
        { name: 'Hormone Therapy', href: '#hormones' },
        { name: 'Weight Management', href: '#weight' }
      ]
    },
    { name: 'About Us', href: '#about' },
    { name: 'Blog & Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg shadow-medium border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ManMed Health
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-strong animate-fade-in">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
            <Button variant="cta" size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border border-border rounded-lg mt-2 shadow-strong animate-fade-in">
            <div className="py-4 px-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-card-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button variant="cta" className="w-full gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;