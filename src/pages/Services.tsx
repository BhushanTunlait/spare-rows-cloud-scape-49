import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Rocket, 
  Cloud, 
  Container, 
  GitBranch, 
  BarChart3, 
  Settings,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import servicesImage from "@/assets/services-k8s.jpg";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "DevOps Consulting & Automation",
      description: "Streamline workflows, automate processes, and boost productivity with modern DevOps practices.",
      features: [
        "DevOps Strategy & Assessment",
        "Process Automation",
        "Workflow Optimization",
        "Team Training & Support"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions (AWS | Azure | GCP)",
      description: "End-to-end cloud solutions for deployment, migration, and optimization across all major platforms.",
      features: [
        "Cloud Migration Strategy",
        "Multi-Cloud Architecture",
        "Cost Optimization",
        "Security & Compliance"
      ]
    },
    {
      icon: Container,
      title: "Kubernetes & Containers",
      description: "Scalable, containerized infrastructure with zero-downtime deployments and high availability.",
      features: [
        "Kubernetes Cluster Setup",
        "Container Orchestration",
        "Microservices Architecture",
        "Auto-scaling Solutions"
      ]
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipelines",
      description: "Automated testing, integration, and delivery to speed up releases and improve code quality.",
      features: [
        "Pipeline Design & Setup",
        "Automated Testing",
        "Deployment Automation",
        "Quality Gates & Controls"
      ]
    },
    {
      icon: BarChart3,
      title: "Monitoring & Observability",
      description: "Proactive monitoring with Prometheus, Grafana, and ELK stack for complete visibility.",
      features: [
        "Real-time Monitoring",
        "Custom Dashboards",
        "Alerting & Notifications",
        "Performance Analytics"
      ]
    },
    {
      icon: Settings,
      title: "Infrastructure as Code (Terraform)",
      description: "Version-controlled, automated infrastructure provisioning for consistent and reliable deployments.",
      features: [
        "Terraform Templates",
        "Infrastructure Automation",
        "Version Control",
        "Environment Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-slide-up">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-navy-text mb-8 animate-slide-up">
              Comprehensive DevOps and cloud solutions to transform your infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                Expert DevOps & Cloud Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We provide end-to-end DevOps and cloud solutions that help businesses 
                scale efficiently, reduce costs, and improve reliability. Our expertise 
                spans across all major cloud platforms and modern DevOps practices.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From initial consultation to ongoing support, we work as your trusted 
                partner to ensure your infrastructure meets current needs and scales 
                for future growth.
              </p>
              <Button asChild className="gradient-primary hover:opacity-90">
                <Link to="/contact">
                  Talk to Our Experts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="animate-float">
              <img 
                src={servicesImage} 
                alt="Kubernetes and Cloud Infrastructure" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 animate-pulse-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology to deliver successful DevOps transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Analyze current infrastructure and identify improvement opportunities" },
              { step: "02", title: "Strategy", description: "Design a comprehensive DevOps strategy aligned with business goals" },
              { step: "03", title: "Implementation", description: "Execute the plan with minimal disruption to ongoing operations" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and optimization for peak performance" }
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {item.step}
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

      {/* CTA Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-navy-text mb-8">
              Let's discuss your specific requirements and create a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-dark-navy hover:bg-navy-text font-medium text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-white text-blue-500 hover:bg-white hover:text-dark-navy font-medium text-lg px-8 py-4"
              >
                <Link to="/use-cases">
                  View Success Stories
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;