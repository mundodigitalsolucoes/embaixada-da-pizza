import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar } from "lucide-react";

const categories = ["Todos", "Pizza", "Delivery", "Rodízio", "Rio Preto", "Fidelidade"];

const posts = [
  { id: "1", title: "Melhor pizzaria em São José do Rio Preto: por que a Embaixada é referência", excerpt: "Descubra o que faz da Embaixada da Pizza a escolha preferida dos rio-pretenses há mais de 20 anos.", category: "Rio Preto", date: "2026-04-05" },
  { id: "2", title: "Rodízio de pizza em Rio Preto: tudo o que você precisa saber", excerpt: "Saiba como funciona o rodízio todos os dias, os sabores disponíveis e dicas para aproveitar ao máximo.", category: "Rodízio", date: "2026-03-28" },
  { id: "3", title: "Pizza delivery no Higienópolis: vantagens de pedir no canal próprio", excerpt: "Entenda por que pedir pelo Cardápio Web traz mais benefícios do que usar aplicativos de terceiros.", category: "Delivery", date: "2026-03-20" },
  { id: "4", title: "Onde fazer confraternização em pizzaria: guia completo", excerpt: "Dicas para organizar aniversários, eventos de empresa e encontros em pizzaria com orçamento acessível.", category: "Rio Preto", date: "2026-03-12" },
  { id: "5", title: "Curiosidades sobre pizza que você não sabia", excerpt: "Da origem napolitana às tendências modernas: fatos surpreendentes sobre a pizza no Brasil e no mundo.", category: "Pizza", date: "2026-03-05" },
  { id: "6", title: "Como o programa Cliente Embaixador valoriza quem pede direto", excerpt: "Conheça o programa de fidelidade da Embaixada e entenda como cada real gasto vira vantagem real.", category: "Fidelidade", date: "2026-02-25" },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = posts.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "Todos" || p.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Blog da Embaixada</h1>
          <p className="text-primary-foreground/80 text-lg">Dicas, novidades e curiosidades sobre pizza, delivery e gastronomia em São José do Rio Preto.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-5xl">
          {/* Search + Categories */}
          <div className="mb-10 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-card text-sm"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article key={p.id} className="bg-card rounded-xl shadow-card overflow-hidden hover:shadow-premium transition-shadow group">
                <div className="h-40 bg-secondary flex items-center justify-center">
                  <span className="text-4xl">🍕</span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full font-medium">{p.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(p.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{p.title}</h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  <Link to={`/blog/${p.id}`} className="text-sm font-semibold text-primary hover:underline inline-block">Ler mais →</Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">Nenhum artigo encontrado.</p>
          )}
        </div>
      </section>
    </>
  );
}
