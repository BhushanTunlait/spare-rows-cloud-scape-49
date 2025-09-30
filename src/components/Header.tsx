import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Cloud, Settings, Users, BookOpen, Briefcase, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Code2 },
    { name: "About", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Cloud },
    { name: "Use Cases", href: "/use-cases", icon: Settings },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Careers", href: "/careers", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <Link to="/" className="flex items-center space-x-2">
              <img 
          src="/images/logo.png"
          alt="Site Logo"
          width={150}
          height={50}
        />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              asChild 
              className="gradient-primary hover:opacity-90 transition-opacity font-medium animate-pulse-glow"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-secondary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border mt-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Button 
                asChild 
                className="gradient-primary hover:opacity-90 mt-4 w-full"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;