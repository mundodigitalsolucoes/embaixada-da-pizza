import { Button } from "@/components/ui/button";
import mascote from "@/assets/mascote-meio-corpo.png";

const CARDAPIO_URL = "#cardapio-web";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Rodízio todos os dias
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              A pizza que virou <span className="text-accent">tradição</span> em Rio Preto
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed">
              Rodízio todos os dias, delivery no canal próprio com vantagens exclusivas e o programa <strong>Cliente Embaixador</strong> que valoriza quem pede direto.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={CARDAPIO_URL}>Pedir no Cardápio Web</a>
              </Button>
              <Button variant="gold" size="lg" asChild>
                <a href="/cliente-embaixador">Seja um Embaixador</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-primary-foreground/60">
              <span>⭐ 4.8 no Google</span>
              <span>📍 Higienópolis</span>
              <span>🍕 +20 anos</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={mascote}
              alt="Mascote da Embaixada da Pizza segurando uma pizza"
              className="w-72 md:w-80 lg:w-96 drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
      {/* decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60h1440V30C1200 0 960 50 720 30S240 0 0 30v30z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
}
