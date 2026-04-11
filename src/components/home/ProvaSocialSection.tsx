import { Star } from "lucide-react";

const reviews = [
  { name: "Maria Silva", text: "Melhor rodízio de Rio Preto! Ambiente incrível e pizza sempre fresquinha. Voltamos toda semana.", rating: 5 },
  { name: "Carlos Santos", text: "Delivery rápido e com muita qualidade. Desde que descobri o Cardápio Web, só peço por lá.", rating: 5 },
  { name: "Ana Oliveira", text: "O programa Cliente Embaixador é sensacional! Já resgatei vários benefícios. Super recomendo.", rating: 5 },
  { name: "Roberto Lima", text: "Fizemos a confraternização da empresa lá e foi perfeito. Atendimento nota 10.", rating: 5 },
];

export default function ProvaSocialSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-accent text-accent" /> 4.8 no Google
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground">Mais de 2.000 avaliações positivas de quem já viveu a experiência Embaixada.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-card">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4 leading-relaxed">"{r.text}"</p>
              <p className="text-xs font-semibold text-muted-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
