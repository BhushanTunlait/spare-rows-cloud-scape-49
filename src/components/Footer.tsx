import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "DevOps Consulting",
    "Cloud Solutions",
    "Kubernetes & Containers",
    "CI/CD Pipelines",
    "Infrastructure as Code",
    "Monitoring & Observability",
  ];

  return (
    <footer className="bg-dark-navy text-navy-text">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl font-poppins text-gradient">
                SpareRows
              </span>
            </div>
            <p className="text-sm text-navy-text/80">
              Empowering businesses with DevOps, cloud, and automation solutions. 
              Specializing in scalable, secure, and reliable infrastructure.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-navy-text hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-navy-text hover:text-primary">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-navy-text hover:text-primary">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-navy-text/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-navy-text/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Stay Updated</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-navy-text/80">
                <MapPin className="w-4 h-4" />
                <span>Sonipat, Haryana, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-navy-text/80">
                <Phone className="w-4 h-4" />
                <span>+91 9206206496</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-navy-text/80">
                <Mail className="w-4 h-4" />
                <span>pankaj.dahiya@sparerows.com</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-2">
              <p className="text-sm text-navy-text/80">Subscribe to our newsletter</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-navy-light border-navy-light text-white placeholder:text-navy-text/60"
                />
                <Button size="sm" className="gradient-primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-navy-text/60">
            © 2025 SpareRows Technology Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-navy-text/60 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-navy-text/60 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;