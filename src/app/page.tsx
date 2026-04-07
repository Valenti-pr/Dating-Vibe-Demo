import HeroSection from "@/components/sections/HeroSection";
import AnimationsSection from "@/components/sections/AnimationsSection";
import InteractivitySection from "@/components/sections/InteractivitySection";
import VisualEffectsSection from "@/components/sections/VisualEffectsSection";
import ResponsiveSection from "@/components/sections/ResponsiveSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AnimationsSection />
      <InteractivitySection />
      <VisualEffectsSection />
      <ResponsiveSection />
      <FooterSection />
    </main>
  );
}

