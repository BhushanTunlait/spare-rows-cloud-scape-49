import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen,
  TrendingUp,
  Code,
  Cloud
} from "lucide-react";

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "5 Best Practices for CI/CD in 2025",
      excerpt: "Discover the latest trends and best practices for implementing robust CI/CD pipelines that improve development velocity and code quality.",
      author: "Pankaj Dahiya",
      date: "2025-01-15",
      category: "CI/CD",
      readTime: "8 min read",
      featured: true,
      tags: ["CI/CD", "DevOps", "Automation"]
    },
    {
      id: 2,
      title: "Kubernetes vs. Docker Swarm: Which Should You Choose?",
      excerpt: "A comprehensive comparison of container orchestration platforms to help you make the right choice for your infrastructure.",
      author: "SpareRows Team",
      date: "2025-01-12",
      category: "Kubernetes",
      readTime: "12 min read",
      featured: true,
      tags: ["Kubernetes", "Docker", "Containers"]
    },
    {
      id: 3,
      title: "How to Cut Cloud Costs with Smarter Automation",
      excerpt: "Learn proven strategies to optimize your cloud spending through intelligent automation and resource management.",
      author: "SpareRows Team",
      date: "2025-01-10",
      category: "Cloud",
      readTime: "10 min read",
      featured: true,
      tags: ["Cloud", "Cost Optimization", "Automation"]
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Infrastructure as Code with Terraform: Getting Started",
      excerpt: "A beginner's guide to implementing Infrastructure as Code using Terraform for consistent and reliable deployments.",
      author: "Pankaj Dahiya",
      date: "2025-01-08",
      category: "Infrastructure",
      readTime: "6 min read",
      tags: ["Terraform", "IaC", "Infrastructure"]
    },
    {
      id: 5,
      title: "Monitoring Microservices with Prometheus and Grafana",
      excerpt: "Complete guide to setting up comprehensive monitoring for microservices architecture using modern observability tools.",
      author: "SpareRows Team",
      date: "2025-01-05",
      category: "Monitoring",
      readTime: "15 min read",
      tags: ["Monitoring", "Prometheus", "Grafana"]
    },
    {
      id: 6,
      title: "Security Best Practices for Kubernetes Clusters",
      excerpt: "Essential security measures every DevOps team should implement to protect their Kubernetes infrastructure.",
      author: "SpareRows Team",
      date: "2025-01-03",
      category: "Security",
      readTime: "11 min read",
      tags: ["Security", "Kubernetes", "DevSecOps"]
    },
    {
      id: 7,
      title: "Multi-Cloud Strategy: Benefits and Implementation",
      excerpt: "Explore the advantages of multi-cloud approaches and practical steps to implement a successful strategy.",
      author: "Pankaj Dahiya",
      date: "2024-12-28",
      category: "Cloud Strategy",
      readTime: "9 min read",
      tags: ["Multi-Cloud", "Strategy", "Cloud"]
    },
    {
      id: 8,
      title: "GitOps: The Future of Continuous Deployment",
      excerpt: "Understanding GitOps principles and how they revolutionize application deployment and infrastructure management.",
      author: "SpareRows Team",
      date: "2024-12-25",
      category: "GitOps",
      readTime: "7 min read",
      tags: ["GitOps", "CD", "DevOps"]
    },
    {
      id: 9,
      title: "Container Security: Scanning and Best Practices",
      excerpt: "Learn how to implement comprehensive container security scanning and adopt best practices for secure containerization.",
      author: "SpareRows Team",
      date: "2024-12-22",
      category: "Security",
      readTime: "13 min read",
      tags: ["Container Security", "Scanning", "DevSecOps"]
    }
  ];

  const categories = [
    { name: "All", count: 25, active: true },
    { name: "DevOps", count: 8 },
    { name: "Cloud", count: 6 },
    { name: "Kubernetes", count: 5 },
    { name: "Security", count: 4 },
    { name: "Monitoring", count: 2 }
  ];

  const CategoryIcon = ({ category }: { category: string }) => {
    switch (category.toLowerCase()) {
      case 'ci/cd':
      case 'devops':
        return <Code className="w-4 h-4" />;
      case 'cloud':
        return <Cloud className="w-4 h-4" />;
      case 'kubernetes':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins animate-slide-up">
              DevOps <span className="text-gradient">Insights</span>
            </h1>
            <p className="text-xl text-navy-text mb-8 animate-slide-up">
              Stay updated with the latest in DevOps, Kubernetes, and Cloud technologies
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.active ? "default" : "outline"}
                size="sm"
                className={category.active ? "gradient-primary" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular and insightful content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <CategoryIcon category={post.category} />
                      <span>{post.category}</span>
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-poppins">
              Recent Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest insights and tutorials from our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-primary/20 h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <CategoryIcon category={post.category} />
                      <span>{post.category}</span>
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 gradient-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-poppins">
              Stay Updated with DevOps Trends
            </h2>
            <p className="text-xl text-navy-text mb-8">
              Subscribe to our newsletter and never miss the latest insights, tutorials, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-navy-light bg-navy-light text-white placeholder:text-navy-text/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-white text-dark-navy hover:bg-navy-text font-medium px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;