import HeroSection from "@/components/home/HeroSection";
import DiferenciaisSection from "@/components/home/DiferenciaisSection";
import ProvaSocialSection from "@/components/home/ProvaSocialSection";
import DeliveryBlock from "@/components/home/DeliveryBlock";
import EmbaixadorBlock from "@/components/home/EmbaixadorBlock";
import RodizioBlock from "@/components/home/RodizioBlock";
import ConfraternizacoesBlock from "@/components/home/ConfraternizacoesBlock";
import SaboresSection from "@/components/home/SaboresSection";
import FAQSection from "@/components/home/FAQSection";
import CTAFinalSection from "@/components/home/CTAFinalSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DiferenciaisSection />
      <ProvaSocialSection />
      <DeliveryBlock />
      <EmbaixadorBlock />
      <RodizioBlock />
      <ConfraternizacoesBlock />
      <SaboresSection />
      <FAQSection />
      <CTAFinalSection />
    </>
  );
}
