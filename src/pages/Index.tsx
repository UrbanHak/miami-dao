import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { ResourcesSection } from "@/components/ui/resources-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <HeroSection />
      <ResourcesSection />
    </div>
  );
};

export default Index;