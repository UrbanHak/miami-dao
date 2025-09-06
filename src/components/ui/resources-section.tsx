import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Video, MessageCircle, Users, Building } from "lucide-react";

export const ResourcesSection = () => {
  const resources = [
    {
      title: "Miami-Dade Community ID",
      description: "Get your blockchain-verified community identity to participate in DAO governance",
      icon: <Users className="w-6 h-6" />,
      href: "https://miamiid.org/",
      badge: "Essential",
      badgeVariant: "default" as const
    },
    {
      title: "White Paper",
      description: "Comprehensive overview of our vision, technology, and governance model",
      icon: <FileText className="w-6 h-6" />,
      href: "https://docsend.com/view/xm54cyautx7t7xr7",
      badge: "Technical",
      badgeVariant: "secondary" as const
    },
    {
      title: "Public Goods Funding",
      description: "Learn about the past, present and future of funding community projects",
      icon: <Building className="w-6 h-6" />,
      href: "https://mirror.xyz/cerv1.eth/VfD17ebuKnUr3jXI2Bbw0qvH1GbsCO6NqjqQ0ecJW_c",
      badge: "Research",
      badgeVariant: "outline" as const
    },
    {
      title: "CoinDesk Interview",
      description: "Watch our community leaders discuss the future of decentralized governance",
      icon: <Video className="w-6 h-6" />,
      href: "https://www.coindesk.com/tv/community-crypto/community-crypto-february-17-2022/",
      badge: "Media",
      badgeVariant: "secondary" as const
    },
    {
      title: "Discord Community",
      description: "Join our active community for discussions, proposals, and collaboration",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://discord.gg/Pv48nzFa",
      badge: "Community",
      badgeVariant: "default" as const
    },
    {
      title: "Crypto Cities",
      description: "Vitalik's vision for how blockchain can transform urban governance",
      icon: <Building className="w-6 h-6" />,
      href: "https://vitalik.ca/general/2021/10/31/cities.html",
      badge: "Inspiration",
      badgeVariant: "outline" as const
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Resources & Links
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Ecosystem</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into our community, research, and the broader movement 
              toward decentralized urban governance.
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-accent text-primary">
                    {resource.icon}
                  </div>
                  <Badge variant={resource.badgeVariant} className="text-xs">
                    {resource.badge}
                  </Badge>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-between text-primary hover:bg-accent/50"
                  asChild
                >
                  <a href={resource.href} target="_blank" rel="noopener noreferrer">
                    Visit Resource
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Additional Links */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-6">More Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://web3citizen.xyz/" target="_blank" rel="noopener noreferrer">
                  State of DAOs 2023
                  <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://smash.miami/" target="_blank" rel="noopener noreferrer">
                  SMASH Miami
                  <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://focities.com/" target="_blank" rel="noopener noreferrer">
                  Future of Cities
                  <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};