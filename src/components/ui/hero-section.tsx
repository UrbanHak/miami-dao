import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Shield, Globe } from "lucide-react";
import miamiHero from "@/assets/miami-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${miamiHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="text-sm px-4 py-2">
            <Globe className="w-4 h-4 mr-2" />
            Miami Dade County Community Initiative
          </Badge>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Miami Dade</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              DAO
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building the future of decentralized governance and community empowerment 
            in Greater Miami through innovative blockchain technology.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://miamiid.org/" target="_blank" rel="noopener noreferrer">
                Get Community ID
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-accent">
              Learn More
            </Button>
          </div>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-12">
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <Users className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Community Governance</h3>
              <p className="text-sm text-muted-foreground">
                Participate in democratic decision-making for Miami Dade County initiatives
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <Shield className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Secure Identity</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain-verified community ID for transparent and secure participation
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <Globe className="w-8 h-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Public Goods</h3>
              <p className="text-sm text-muted-foreground">
                Funding and supporting projects that benefit the entire Miami community
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};