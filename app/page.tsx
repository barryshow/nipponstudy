import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCards } from "@/components/home/ServiceCards";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CostEstimate } from "@/components/home/CostEstimate";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <WhyChooseUs />
      <ProcessTimeline />
      <CostEstimate />
      <CTABanner />
    </>
  );
}
