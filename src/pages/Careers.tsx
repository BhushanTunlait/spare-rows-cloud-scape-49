import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  Globe,
  BookOpen
} from "lucide-react";

const Careers = () => {
  const openings = [
    {
      id: 1,
      title: "Senior DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹15-25 LPA",
      description: "Lead DevOps initiatives, implement CI/CD pipelines, and manage cloud infrastructure across AWS, Azure, and GCP.",
      requirements: [
        "5+ years of DevOps experience",
        "Expertise in Kubernetes and Docker",
        "Strong knowledge of AWS/Azure/GCP",
        "Experience with Terraform and Ansible",
        "CI/CD pipeline implementation"
      ],
      skills: ["Kubernetes", "AWS", "Terraform", "CI/CD", "Docker"]
    },
    {
      id: 2,
      title: "Cloud Architect",
      location: "Sonipat, Haryana / Remote",
      type: "Full-time",
      experience: "7+ years",
      salary: "₹20-35 LPA",
      description: "Design and implement scalable cloud architectures, lead technical teams, and drive cloud adoption strategies.",
      requirements: [
        "7+ years in cloud architecture",
        "Multi-cloud expertise (AWS, Azure, GCP)",
        "Enterprise architecture experience",
        "Team leadership skills",
        "Security and compliance knowledge"
      ],
      skills: ["Cloud Architecture", "AWS", "Azure", "GCP", "Leadership"]
    },
    {
      id: 3,
      title: "Kubernetes Specialist",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "₹12-20 LPA",
      description: "Focus on Kubernetes cluster management, container orchestration, and microservices architecture implementation.",
      requirements: [
        "4+ years of Kubernetes experience",
        "Container orchestration expertise",
        "Microservices architecture knowledge",
        "Monitoring and observability tools",
        "Security best practices"
      ],
      skills: ["Kubernetes", "Docker", "Microservices", "Prometheus", "Grafana"]
    },
    {
      id: 4,
      title: "DevOps Intern",
      location: "Sonipat, Haryana",
      type: "Internship",
      experience: "0-1 years",
      salary: "₹15-25K/month",
      description: "Learn DevOps practices, assist with automation tasks, and gain hands-on experience with modern cloud technologies.",
      requirements: [
        "Basic understanding of Linux",
        "Interest in automation and cloud",
        "Basic scripting knowledge",
        "Strong learning attitude",
        "Engineering degree (ongoing/completed)"
      ],
      skills: ["Linux", "Git", "Basic Scripting", "Docker", "AWS Basics"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement programs"
    },
    {
      icon: Globe,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible schedules"
    },
    {
      icon: BookOpen,
      title: "Learning Budget",
      description: "Annual budget for courses, conferences, and certifications"
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Work with passionate experts and industry leaders"
    },
    {
      icon: DollarSign,
      title: "Competitive Package",
      description: "Market-leading salary and performance bonuses"
    }
  ];

  const culture = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and encourage creative problem-solving"
    },
    {
      title: "Continuous Learning",
      description: "Regular training, workshops, and knowledge sharing sessions"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and supportive remote work environment"
    },
    {
      title: "Diversity & Inclusion",
      description: "Building an inclusive team with diverse perspectives and backgrounds"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-slide-up">
              Join Our <span className="text-gradient">Expert Team</span>
            </h1>
            <p className="text-xl text-navy-text mb-8 animate-slide-up">
              Build the future of DevOps and cloud infrastructure with passionate innovators
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Why Join SpareRows?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of a team that's transforming how businesses approach DevOps and cloud infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {culture.map((item, index) => (
              <div 
                key={item.title} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Benefits & Perks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We invest in our team's success and well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={benefit.title} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Current Openings
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next career opportunity with us
            </p>
          </div>

          <div className="space-y-8">
            {openings.map((job, index) => (
              <Card 
                key={job.id} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Job Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{job.location}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{job.type}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <DollarSign className="w-3 h-3" />
                          <span>{job.salary}</span>
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {job.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-primary border-primary">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Section */}
                    <div className="flex flex-col justify-between">
                      <div className="mb-6">
                        <div className="text-sm text-muted-foreground mb-2">Experience Required</div>
                        <div className="font-semibold text-foreground text-lg">{job.experience}</div>
                      </div>
                      
                      <div className="space-y-3">
                        <Button 
                          asChild 
                          className="gradient-primary hover:opacity-90 w-full"
                        >
                          <Link to="/contact">
                            Apply Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Send Us Your Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Shape the Future of DevOps?
            </h2>
            <p className="text-xl text-navy-text mb-8">
              Join our team of innovators and help businesses transform their infrastructure with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-dark-navy hover:bg-navy-text font-medium text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Start Your Application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-navy font-medium text-lg px-8 py-4"
              >
                <Link to="/about">
                  Learn About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;