import SEO from "@/components/seo/SEO";
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

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Embaixada da Pizza",
  image: "https://embaixadadapizza.com.br/og-image.jpg",
  url: "https://embaixadadapizza.com.br/",
  telephone: "+55 17 3222-1279",
  servesCuisine: "Pizza",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Paulo Vidali, 250",
    addressLocality: "São José do Rio Preto",
    addressRegion: "SP",
    postalCode: "15085-470",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.instagram.com/embaixadadapizzarp/",
    "https://www.facebook.com/profile.php?id=61550981906994",
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Embaixada da Pizza | Pizzaria em São José do Rio Preto"
        description="Rodízio todos os dias, pizza delivery pelo canal próprio e vantagens exclusivas no Cliente Embaixador. Conheça a Embaixada da Pizza no Higienópolis, em São José do Rio Preto."
        canonical="https://embaixadadapizza.com.br/"
        keywords="pizzaria em São José do Rio Preto, pizzaria Higienópolis, pizza delivery São José do Rio Preto, rodízio de pizza Rio Preto, Embaixada da Pizza"
        ogTitle="Embaixada da Pizza | Rodízio, Delivery e Fidelidade"
        ogDescription="Pizzaria em São José do Rio Preto com rodízio todos os dias, delivery no canal próprio e programa Cliente Embaixador."
        ogType="website"
        jsonLd={homeJsonLd}
      />

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