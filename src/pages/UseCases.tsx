import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Shield, 
  Wifi, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Award,
  BarChart3
} from "lucide-react";

const UseCases = () => {
  const caseStudies = [
    {
      icon: Users,
      title: "Scaling a SaaS App for 10 Million Users",
      client: "Enterprise SaaS Platform",
      challenge: "Handle massive user growth while maintaining performance and security",
      solution: "We deployed a Kubernetes cluster with enhanced security (OWASP rules, Black Duck scans) and CI/CD pipelines to handle 10M+ requests smoothly.",
      results: [
        "99.9% uptime achieved",
        "10M+ concurrent users supported",
        "50% reduction in deployment time",
        "Zero-downtime deployments"
      ],
      tags: ["Kubernetes", "CI/CD", "Security", "Scalability"]
    },
    {
      icon: Shield,
      title: "Air-Gapped IoT Infrastructure",
      client: "Industrial IoT Company",
      challenge: "Deploy secure, isolated infrastructure for critical IoT devices",
      solution: "We designed an air-gapped Kubernetes solution for critical IoT devices, ensuring compliance and 100% uptime without external dependencies.",
      results: [
        "100% uptime maintenance",
        "Full compliance achieved",
        "Zero external dependencies",
        "Enhanced security posture"
      ],
      tags: ["IoT", "Security", "Kubernetes", "Compliance"]
    },
    {
      icon: Wifi,
      title: "IoT Edge Deployments",
      client: "Smart City Solutions",
      challenge: "Deploy and monitor IoT devices across multiple edge locations",
      solution: "End-to-end IoT edge deployments with Kubernetes, KubeEdge, Docker, and Prometheus for real-time monitoring.",
      results: [
        "1000+ edge devices managed",
        "Real-time monitoring implemented",
        "30% improvement in response time",
        "Automated device management"
      ],
      tags: ["IoT Edge", "KubeEdge", "Monitoring", "Automation"]
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: "300%", label: "Average Performance Improvement" },
    { icon: Clock, value: "75%", label: "Reduction in Deployment Time" },
    { icon: Award, value: "99.9%", label: "Uptime Achieved" },
    { icon: BarChart3, value: "60%", label: "Cost Savings on Infrastructure" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-slide-up">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-xl text-navy-text mb-8 animate-slide-up">
              Real-world transformations delivered by our DevOps and cloud expertise
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Results That Matter
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground font-medium text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Featured Case Studies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how we've helped businesses transform their infrastructure
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.title} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 animate-pulse-glow">
                          <study.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {study.title}
                          </h3>
                          <p className="text-primary font-medium mb-2">
                            {study.client}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                              <span 
                                key={tag} 
                                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-foreground">
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-foreground">
                        Solution
                      </h4>
                      <p className="text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-foreground">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across various industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "SaaS Platforms",
              "E-commerce",
              "FinTech",
              "Healthcare",
              "IoT & Smart Cities",
              "Manufacturing",
              "Education",
              "Gaming",
              "Media & Entertainment",
              "Startups"
            ].map((industry, index) => (
              <Card 
                key={industry} 
                className="text-center hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <p className="font-medium text-foreground">{industry}</p>
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-navy-text mb-8">
              Let's discuss how we can help you achieve similar results for your business.
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
                className="border-white text-blue-500 hover:bg-white hover:text-dark-navy font-medium text-lg px-8 py-4"
              >
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;