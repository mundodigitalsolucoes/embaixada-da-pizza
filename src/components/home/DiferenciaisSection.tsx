import { Clock, Truck, Award, Headphones, UtensilsCrossed, Gift } from "lucide-react";

const items = [
  { icon: Clock, title: "Rodízio Todos os Dias", desc: "Experiência completa de rodízio com variedade e qualidade, todos os dias da semana." },
  { icon: Truck, title: "Delivery no Canal Próprio", desc: "Peça direto pelo nosso Cardápio Web e tenha vantagens exclusivas no delivery." },
  { icon: Award, title: "Cliente Embaixador", desc: "Programa de fidelidade com pontos, recompensas e benefícios reais." },
  { icon: Headphones, title: "Atendimento Rápido", desc: "Central de atendimento ágil para pedidos, dúvidas e reservas." },
  { icon: UtensilsCrossed, title: "Experiência no Salão", desc: "Ambiente acolhedor para famílias, casais e grupos em Higienópolis." },
  { icon: Gift, title: "Vantagens Exclusivas", desc: "Quem pede direto ganha mais. Promoções e benefícios só no canal próprio." },
];

export default function DiferenciaisSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Por que a Embaixada é <span className="text-primary">diferente</span>
          </h2>
          <p className="text-muted-foreground">Mais do que pizza: experiência, fidelidade e vantagem real.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-premium transition-shadow group">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
