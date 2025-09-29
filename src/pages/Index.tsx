import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Cloud, 
  Container, 
  GitBranch, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "DevOps Consulting",
      description: "Streamline workflows and boost productivity"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS | Azure | GCP expertise"
    },
    {
      icon: Container,
      title: "Kubernetes & Containers",
      description: "Scalable containerized infrastructure"
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated testing and deployment"
    },
    {
      icon: BarChart3,
      title: "Monitoring & Observability",
      description: "Proactive monitoring solutions"
    }
  ];

  const stats = [
    { icon: Users, value: "50+", label: "Projects Delivered" },
    { icon: Award, value: "99.9%", label: "Uptime Achieved" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Cloud, value: "3", label: "Cloud Platforms" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins">
              Empowering Businesses with{" "}
              <span className="text-gradient">DevOps, Cloud & Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-text mb-8 max-w-3xl mx-auto">
              We help startups and enterprises accelerate growth through cloud-native 
              solutions, modern DevOps practices, and reliable automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="gradient-primary hover:opacity-90 font-medium text-lg px-8 py-4 animate-pulse-glow"
              >
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-navy font-medium text-lg px-8 py-4"
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive DevOps and cloud solutions to transform your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={item.title} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-float border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-navy-text mb-8">
              Let's discuss how we can help you achieve scalable, secure, and automated solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-dark-navy hover:bg-navy-text font-medium text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-navy font-medium text-lg px-8 py-4"
              >
                <Link to="/use-cases">
                  View Case Studies
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;