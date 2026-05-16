import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      {/* Other sections like CoreValues, Services, Projects can be added here later */}
    </div>
  );
}
