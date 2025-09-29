import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "CTO",
      company: "TechStart Solutions",
      content: "SpareRows completely transformed our infrastructure. Their DevOps expertise helped us reduce deployment time by 80% and achieve 99.9% uptime. The team is professional, responsive, and truly understands modern cloud architecture.",
      rating: 5,
      avatar: "SC"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      position: "Engineering Manager",
      company: "DataFlow Inc",
      content: "Working with SpareRows was a game-changer for our CI/CD pipeline. They implemented a robust Kubernetes infrastructure that scales seamlessly with our growing user base. Highly recommend their services!",
      rating: 5,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Priya Sharma",
      position: "Head of Operations",
      company: "CloudScale Systems",
      content: "The monitoring and observability solutions implemented by SpareRows gave us unprecedented visibility into our systems. We now catch issues before they impact users, and our MTTR has improved dramatically.",
      rating: 5,
      avatar: "PS"
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Founder & CEO",
      company: "InnovateNext",
      content: "SpareRows team helped us migrate to AWS seamlessly. Their expertise in cloud security and cost optimization saved us 40% on our infrastructure costs while improving performance significantly.",
      rating: 5,
      avatar: "JW"
    },
    {
      id: 5,
      name: "Lisa Kim",
      position: "DevOps Lead",
      company: "ScaleTech",
      content: "The Infrastructure as Code solutions provided by SpareRows revolutionized our deployment process. Everything is now version-controlled, reproducible, and automated. Outstanding work!",
      rating: 5,
      avatar: "LK"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by startups and enterprises worldwide for our DevOps and cloud expertise
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - 3 Cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}`}
                className={`testimonial-card border-primary/20 hover:shadow-lg transition-all duration-500 ${
                  index === 1 ? 'scale-105 border-primary shadow-xl' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile/Tablet View - 1 Card */}
          <div className="lg:hidden">
            <Card className="testimonial-card border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold mr-4">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-primary/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;