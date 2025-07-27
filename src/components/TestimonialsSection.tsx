import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Michael R.",
      age: "42, Executive",
      rating: 5,
      text: "ManMed Health completely changed my life. The ED treatment worked within days, and the team made the whole process comfortable and professional. I feel like I'm 25 again!",
      treatment: "Erectile Dysfunction"
    },
    {
      name: "David L.",
      age: "35, Entrepreneur", 
      rating: 5,
      text: "After struggling with hair loss for years, their treatment plan gave me real results. My confidence is through the roof, and people actually notice the difference.",
      treatment: "Hair Loss Treatment"
    },
    {
      name: "James K.",
      age: "48, Athlete",
      rating: 5,
      text: "The hormone therapy program boosted my energy levels dramatically. I'm lifting heavier, sleeping better, and feel more focused than I have in decades.",
      treatment: "Hormone Therapy"
    },
    {
      name: "Robert M.",
      age: "39, Father of 3",
      rating: 5,
      text: "The vitality program helped me keep up with my kids again. I have energy all day long and my wife says I'm like a new man. Highly recommend!",
      treatment: "Vitality Enhancement"
    },
    {
      name: "Alex T.",
      age: "45, Finance Director",
      rating: 5,
      text: "Professional, discreet, and effective. The weight management program helped me lose 30 pounds while building muscle. Best investment I've made.",
      treatment: "Weight Management"
    },
    {
      name: "Chris W.",
      age: "37, Tech CEO",
      rating: 5,
      text: "The cognitive enhancement program sharpened my focus and decision-making. My team notices the difference in my leadership and energy levels.",
      treatment: "Performance Enhancement"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Men,{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how ManMed Health has transformed 
            the lives of thousands of men just like you.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-primary opacity-20" />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.age}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-muted rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-muted-foreground">Medical Board</span>
            </div>
            <div className="bg-muted rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-muted-foreground">FDA Approved</span>
            </div>
            <div className="bg-muted rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-muted-foreground">HIPAA Compliant</span>
            </div>
            <div className="bg-muted rounded-lg p-6 h-20 flex items-center justify-center">
              <span className="font-bold text-muted-foreground">Top Rated</span>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Happy Patients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;