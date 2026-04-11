import { Button } from "@/components/ui/button";
import { Truck, Star, Gift } from "lucide-react";

const CARDAPIO_URL = "#cardapio-web";

export default function DeliveryBlock() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 lg:p-16 text-primary-foreground">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Delivery com vantagem real
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Peça pelo nosso Cardápio Web e ganhe pontos no Cliente Embaixador a cada pedido. Sem intermediários, sem taxa extra — direto com a gente.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Entrega rápida</p>
                  <p className="text-xs text-primary-foreground/60">Higienópolis e região</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Acumule pontos</p>
                  <p className="text-xs text-primary-foreground/60">R$1 = 1 ponto</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Gift className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm">Recompensas</p>
                  <p className="text-xs text-primary-foreground/60">Benefícios exclusivos</p>
                </div>
              </div>
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href={CARDAPIO_URL}>Pedir no Cardápio Web</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
