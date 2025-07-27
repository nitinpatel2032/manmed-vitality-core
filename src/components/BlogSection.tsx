import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Complete Guide to Testosterone Replacement Therapy",
      excerpt: "Understanding TRT benefits, risks, and what to expect from hormone optimization treatments for men over 30.",
      author: "Dr. Michael Chen",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Hormone Health",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "5 Natural Ways to Boost Energy and Vitality",
      excerpt: "Science-backed lifestyle changes that can dramatically improve your energy levels without medications.",
      author: "Dr. Sarah Williams",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "ED Treatment Options: What Actually Works in 2024",
      excerpt: "A comprehensive comparison of modern erectile dysfunction treatments, from oral medications to advanced therapies.",
      author: "Dr. James Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Sexual Health",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Hair Loss Solutions That Actually Work",
      excerpt: "Exploring proven treatments for male pattern baldness, from FDA-approved medications to cutting-edge procedures.",
      author: "Dr. Lisa Park",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Hair Health",
      image: "https://images.unsplash.com/photo-1503951458645-643d53babdf6?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Weight Loss for Men: A Medical Approach",
      excerpt: "How medical weight management programs can help men achieve sustainable weight loss and improved health.",
      author: "Dr. Robert Kim",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Weight Management",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Mental Health and Men's Wellness",
      excerpt: "Breaking the stigma around men's mental health and exploring the connection between physical and mental wellness.",
      author: "Dr. Amanda Foster",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center"
    }
  ];

  const categories = [
    'All',
    'Hormone Health',
    'Sexual Health',
    'Wellness',
    'Weight Management',
    'Hair Health',
    'Mental Health'
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Health{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Insights & Tips
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest research, expert advice, and practical tips 
            for optimizing your health and performance.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              size="sm"
              className="hover:scale-105 transition-transform"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16 animate-fade-in">
          <div className="bg-gradient-card border border-border rounded-2xl overflow-hidden shadow-strong hover:shadow-glow transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span className="text-foreground font-medium">{blogPosts[0].author}</span>
                  </div>
                  <Button variant="hero" className="gap-2">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article 
              key={post.title}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1 group-hover:text-primary">
                    Read More
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="gap-2">
            Load More Articles
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss a Health Update
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly health insights, treatment updates, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <Button variant="accent" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;