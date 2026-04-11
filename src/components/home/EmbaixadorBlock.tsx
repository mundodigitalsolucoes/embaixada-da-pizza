import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import mascote from "@/assets/mascote-meio-corpo.png";
import { Award, Gift, Zap } from "lucide-react";

export default function EmbaixadorBlock() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Award className="w-4 h-4" /> Programa de Fidelidade
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cliente <span className="text-gradient-gold">Embaixador</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Cadastre-se gratuitamente e comece a acumular vantagens desde o primeiro pedido. Cada real gasto vira ponto, e cada ponto te aproxima de recompensas exclusivas.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Cadastro gratuito + benefício de entrada</p>
                  <p className="text-xs text-muted-foreground">Comece ganhando desde o primeiro momento</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">R$1 = 1 ponto</p>
                  <p className="text-xs text-muted-foreground">Acumule a cada pedido no Cardápio Web</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Recompensas reais</p>
                  <p className="text-xs text-muted-foreground">Troque pontos por pizzas, descontos e mais</p>
                </div>
              </div>
            </div>
            <Button variant="gold" size="lg" asChild>
              <Link to="/cliente-embaixador">Quero ser Embaixador</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <img src={mascote} alt="Mascote Embaixada da Pizza" className="w-64 md:w-72 drop-shadow-xl" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
