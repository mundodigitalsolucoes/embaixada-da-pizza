import { Button } from "@/components/ui/button";
import { Truck, Star, Gift, Clock, ShieldCheck } from "lucide-react";
import FAQSection from "@/components/home/FAQSection";
import ProvaSocialSection from "@/components/home/ProvaSocialSection";

const CARDAPIO_URL = "#cardapio-web";

export default function Delivery() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Peça sua pizza com vantagem
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            No Cardápio Web da Embaixada você pede direto, acumula pontos e garante benefícios exclusivos. Sem intermediário, sem taxa extra.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href={CARDAPIO_URL} className="text-lg px-10 py-4">Abrir Cardápio Web</a>
          </Button>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Por que pedir pelo nosso canal?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Truck, title: "Entrega Rápida", desc: "Direto para sua casa em Higienópolis e região" },
              { icon: Star, title: "Pontos a Cada Pedido", desc: "R$1 = 1 ponto no Cliente Embaixador" },
              { icon: Gift, title: "Recompensas", desc: "Troque pontos por pizzas e descontos" },
              { icon: ShieldCheck, title: "Sem Taxa Extra", desc: "Pedido direto, preço justo" },
            ].map((b) => (
              <div key={b.title} className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgência */}
      <section className="py-12 bg-secondary">
        <div className="container text-center max-w-2xl">
          <div className="flex items-center justify-center gap-2 text-cta font-semibold mb-3">
            <Clock className="w-5 h-5" />
            Aberto agora — peça já!
          </div>
          <p className="text-muted-foreground mb-6">
            Escolha seus sabores favoritos, finalize em minutos e receba em casa com a qualidade Embaixada.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href={CARDAPIO_URL}>Pedir Agora</a>
          </Button>
        </div>
      </section>

      <ProvaSocialSection />
      <FAQSection />
    </>
  );
}
