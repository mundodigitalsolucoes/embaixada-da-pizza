import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { Truck, Star, Gift, Clock, ShieldCheck } from "lucide-react";
import FAQSection from "@/components/home/FAQSection";
import ProvaSocialSection from "@/components/home/ProvaSocialSection";

const CARDAPIO_URL = "https://cardapio.embaixadadapizza.com.br/";

const deliveryJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pizza Delivery Embaixada da Pizza",
  serviceType: "Pizza delivery",
  areaServed: {
    "@type": "City",
    name: "São José do Rio Preto",
  },
  provider: {
    "@type": "Restaurant",
    name: "Embaixada da Pizza",
    url: "https://embaixadadapizza.com.br/",
    telephone: "+55 17 3222-1279",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Paulo Vidali, 250",
      addressLocality: "São José do Rio Preto",
      addressRegion: "SP",
      postalCode: "15085-470",
      addressCountry: "BR",
    },
  },
};

export default function DeliveryPage() {
  return (
    <>
      <SEO
        title="Pizza Delivery em São José do Rio Preto | Embaixada da Pizza"
        description="Peça pizza delivery pelo canal próprio da Embaixada da Pizza no Higienópolis. Mais praticidade, vantagens exclusivas e Cliente Embaixador em São José do Rio Preto."
        canonical="https://embaixadadapizza.com.br/delivery"
        keywords="pizza delivery São José do Rio Preto, pizza delivery Higienópolis, pedir pizza em Rio Preto, delivery Embaixada da Pizza, pizzaria delivery Rio Preto"
        ogTitle="Pizza Delivery em São José do Rio Preto | Embaixada da Pizza"
        ogDescription="Peça pelo canal próprio da Embaixada da Pizza e aproveite mais vantagens no delivery em São José do Rio Preto."
        ogType="website"
        jsonLd={deliveryJsonLd}
      />

      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pizza delivery em São José do Rio Preto com vantagens pra quem pede direto
          </h1>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Peça sua pizza pelo canal próprio da <strong>Embaixada da Pizza</strong>,
            no Higienópolis, com mais praticidade, benefícios exclusivos e o programa{" "}
            <strong>Cliente Embaixador</strong>.
          </p>

          <Button variant="cta" size="lg" asChild>
            <a
              href={CARDAPIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg px-10 py-4"
            >
              Abrir Cardápio Web
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Por que pedir pelo nosso canal próprio?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Truck,
                title: "Entrega Rápida",
                desc: "Peça sua pizza delivery em São José do Rio Preto com agilidade e praticidade.",
              },
              {
                icon: Star,
                title: "Pontos a Cada Pedido",
                desc: "A cada pedido no canal próprio, você acumula pontos no Cliente Embaixador.",
              },
              {
                icon: Gift,
                title: "Mais Vantagens",
                desc: "Ganhe benefícios, recompensas e motivos reais para pedir direto com a gente.",
              },
              {
                icon: ShieldCheck,
                title: "Pedido Direto",
                desc: "Mais controle, mais proximidade com a marca e uma experiência mais completa.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-2xl bg-card border border-border shadow-card p-6 text-center space-y-3"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-foreground">
                  {b.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container text-center max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-cta font-semibold mb-3">
            <Clock className="w-5 h-5" />
            Delivery no canal próprio da Embaixada
          </div>

          <p className="text-muted-foreground mb-6">
            Escolha seus sabores favoritos, finalize seu pedido em poucos minutos
            e aproveite uma experiência mais completa pedindo direto pela Embaixada da Pizza.
          </p>

          <Button variant="cta" size="lg" asChild>
            <a href={CARDAPIO_URL} target="_blank" rel="noopener noreferrer">
              Pedir Agora
            </a>
          </Button>
        </div>
      </section>

      <ProvaSocialSection />
      <FAQSection />
    </>
  );
}