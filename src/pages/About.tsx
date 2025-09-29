import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Target, Award, ArrowRight } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Multi-Cloud Expertise",
      description: "Deep expertise across AWS, Azure, and Google Cloud Platform"
    },
    {
      icon: Award,
      title: "Proven DevOps Track Record",
      description: "Successfully delivered 50+ projects with 99.9% uptime"
    },
    {
      icon: Target,
      title: "Scalable & Secure Solutions",
      description: "Building infrastructure that grows with your business"
    },
    {
      icon: Users,
      title: "Customer-Centric Approach",
      description: "Dedicated support and partnership throughout your journey"
    }
  ];

  const team = [
    {
      name: "Pankaj Dahiya",
      role: "Founder & Lead DevOps Engineer",
      description: "10+ years in DevOps, Cloud Architecture, and Infrastructure Automation"
    },
    {
      name: "Cloud Solutions Team",
      role: "Senior Engineers",
      description: "Certified professionals in AWS, Azure, GCP, and Kubernetes"
    },
    {
      name: "DevOps Specialists",
      role: "Automation Experts",
      description: "CI/CD, Infrastructure as Code, and Monitoring specialists"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-slide-up">
              About <span className="text-gradient">SpareRows Technology</span>
            </h1>
            <p className="text-xl text-navy-text mb-8 animate-slide-up">
              Empowering businesses through innovative DevOps and cloud solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At SpareRows Technology, we specialize in building scalable, secure, and 
                automated infrastructures. With years of expertise in multi-cloud DevOps, 
                our mission is to help organizations innovate faster and operate smarter.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that every business deserves robust, reliable infrastructure 
                that enables growth and innovation. Our team of experts works closely 
                with clients to understand their unique challenges and deliver tailored 
                solutions that drive real business value.
              </p>
              <Button asChild className="gradient-primary hover:opacity-90">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-float">
              <img 
                src={teamImage} 
                alt="SpareRows Technology Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Why Choose SpareRows?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence and innovation sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={member.name} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-navy-text mb-8">
              Let's discuss how our expertise can help transform your infrastructure and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-dark-navy hover:bg-navy-text font-medium text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-navy font-medium text-lg px-8 py-4"
              >
                <Link to="/careers">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;