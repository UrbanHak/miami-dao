import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Community ID", href: "https://miamiid.org/", external: true },
    { label: "White Paper", href: "https://docsend.com/view/xm54cyautx7t7xr7", external: true },
    { label: "Discord", href: "https://discord.gg/Pv48nzFa", external: true },
    { label: "Telegram", href: "https://t.me/miamidadedao1", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
            <span className="font-bold text-xl">Miami Dade DAO</span>
            <Badge variant="secondary" className="hidden sm:inline-flex text-xs">
              Beta
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {link.label}
                {link.external && <ExternalLink className="w-3 h-3" />}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {link.external && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};