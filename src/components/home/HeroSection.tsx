import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mascote from "@/assets/mascote-embaixada-transparencia.png";

const CARDAPIO_URL = "https://cardapio.embaixadadapizza.com.br/";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Rodízio todos os dias em São José do Rio Preto
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pizzaria em <span className="text-accent">São José do Rio Preto</span>{" "}
              com rodízio, delivery e vantagens pra quem pede direto
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Na <strong>Embaixada da Pizza</strong>, você aproveita rodízio todos
              os dias, delivery pelo canal próprio e o programa{" "}
              <strong>Cliente Embaixador</strong>, que transforma cada pedido em
              vantagens reais.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={CARDAPIO_URL} target="_blank" rel="noopener noreferrer">
                  Pedir no Cardápio Web
                </a>
              </Button>

              <Button variant="gold" size="lg" asChild>
                <Link to="/cliente-embaixador">Seja um Embaixador</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 text-sm text-primary-foreground/65">
              <span>⭐ Pizzaria em Rio Preto</span>
              <span>📍 Higienópolis</span>
              <span>🍕 Delivery no canal próprio</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-accent/20 blur-3xl opacity-70" />
            </div>

            <div className="relative">
              <img
                src={mascote}
                alt="Mascote da Embaixada da Pizza segurando uma pizza"
                className="relative z-10 w-[320px] md:w-[420px] lg:w-[500px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60h1440V30C1200 0 960 50 720 30S240 0 0 30v30z"
            fill="hsl(0 0% 100%)"
          />
        </svg>
      </div>
    </section>
  );
}