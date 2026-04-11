const sabores = [
  { name: "Calabresa Especial", desc: "Calabresa artesanal, cebola roxa e azeitonas", tag: "Clássica" },
  { name: "Margherita", desc: "Molho de tomate fresco, mussarela de búfala e manjericão", tag: "Tradicional" },
  { name: "Quatro Queijos", desc: "Mussarela, gorgonzola, provolone e parmesão", tag: "Favorita" },
  { name: "Portuguesa", desc: "Presunto, ovo, cebola, ervilha e azeitona", tag: "Clássica" },
  { name: "Frango com Catupiry", desc: "Frango desfiado com catupiry cremoso", tag: "Mais Pedida" },
  { name: "Pepperoni", desc: "Pepperoni importado com mussarela e orégano", tag: "Premium" },
];

export default function SaboresSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Sabores mais pedidos
          </h2>
          <p className="text-muted-foreground">Massas artesanais, ingredientes selecionados e receitas que são tradição em Rio Preto.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sabores.map((s) => (
            <div key={s.name} className="bg-card rounded-xl p-6 shadow-card hover:shadow-premium transition-shadow border border-border">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-display text-lg font-semibold text-foreground">{s.name}</h3>
                <span className="text-xs font-semibold bg-accent/20 text-accent-foreground rounded-full px-3 py-1">{s.tag}</span>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
