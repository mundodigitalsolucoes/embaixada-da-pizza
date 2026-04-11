import SEO from "@/components/seo/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Building2, PartyPopper, Star } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551732221279?text=Olá! Gostaria de solicitar um orçamento para confraternização na Embaixada da Pizza.";

const confraternizacaoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Confraternizações na Embaixada da Pizza",
  serviceType: "Confraternizações e eventos em pizzaria",
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

export default function ConfraternizacoesPage() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipo: "",
    pessoas: "",
    data: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg =
      `Olá! Quero solicitar orçamento para confraternização.%0A%0A` +
      `Nome: ${form.nome}%0A` +
      `Telefone: ${form.telefone}%0A` +
      `Email: ${form.email || "Não informado"}%0A` +
      `Tipo de evento: ${form.tipo || "Não informado"}%0A` +
      `Número de pessoas: ${form.pessoas || "Não informado"}%0A` +
      `Data pretendida: ${form.data || "Não informada"}%0A` +
      `Observações: ${form.mensagem || "Sem observações"}`;

    window.open(`https://wa.me/551732221279?text=${msg}`, "_blank");
  };

  return (
    <>
      <SEO
        title="Confraternizações em Pizzaria em São José do Rio Preto | Embaixada da Pizza"
        description="Faça sua confraternização na Embaixada da Pizza, no Higienópolis, em São José do Rio Preto. Ideal para aniversários, empresas, grupos e eventos especiais."
        canonical="https://embaixadadapizza.com.br/confraternizacoes"
        keywords="confraternização em pizzaria Rio Preto, aniversários em pizzaria, pizzaria para grupos em São José do Rio Preto, confraternização empresa pizzaria, Embaixada da Pizza"
        ogTitle="Confraternizações em Pizzaria | Embaixada da Pizza"
        ogDescription="Aniversários, empresas, grupos e eventos especiais na Embaixada da Pizza em São José do Rio Preto."
        ogType="website"
        jsonLd={confraternizacaoJsonLd}
      />

      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Confraternizações em pizzaria em São José do Rio Preto
          </h1>

          <p className="text-primary-foreground/80 text-lg mb-8">
            A <strong>Embaixada da Pizza</strong> é o lugar ideal para
            aniversários, encontros de empresa, grupos e celebrações especiais
            no Higienópolis, com ambiente agradável e experiência completa.
          </p>

          <Button variant="cta" size="lg" asChild>
            <a href="#orcamento">Solicitar Orçamento</a>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Para quais ocasiões a Embaixada é ideal?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: PartyPopper,
                title: "Aniversários",
                desc: "Comemore em um ambiente agradável, com pizza, rodízio e clima perfeito para reunir quem importa.",
              },
              {
                icon: Building2,
                title: "Empresas",
                desc: "Uma ótima opção para confraternizações corporativas em pizzaria em São José do Rio Preto.",
              },
              {
                icon: Users,
                title: "Grupos",
                desc: "Encontros de amigos, famílias e grupos que querem praticidade e boa experiência.",
              },
              {
                icon: Calendar,
                title: "Datas Especiais",
                desc: "Final de ano, comemorações, eventos internos e encontros que pedem um lugar marcante.",
              },
            ].map((d) => (
              <div
                key={d.title}
                className="rounded-2xl bg-card border border-border shadow-card p-6 text-center space-y-3"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center">
                  <d.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-foreground">
                  {d.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-5xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
            Por que fazer sua confraternização na Embaixada?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "Experiência de marca",
                desc: "Uma pizzaria forte em Rio Preto, com ambiente acolhedor e presença consolidada.",
              },
              {
                icon: Users,
                title: "Estrutura para grupos",
                desc: "Espaço pensado para receber grupos de diferentes tamanhos com conforto.",
              },
              {
                icon: Calendar,
                title: "Atendimento comercial",
                desc: "Condições alinhadas para tornar seu encontro mais organizado e especial.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-card rounded-xl p-6 shadow-card text-center border border-border"
              >
                <b.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">
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

      <section id="orcamento" className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Solicite seu orçamento
          </h2>

          <p className="text-muted-foreground text-center mb-10">
            Preencha os dados abaixo e envie direto pelo WhatsApp para agilizar
            o atendimento da sua confraternização.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-premium space-y-5 border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) =>
                    setForm({ ...form, telefone: e.target.value })
                  }
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">
                  Tipo de evento
                </label>
                <select
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
                >
                  <option value="">Selecione</option>
                  <option value="Aniversário">Aniversário</option>
                  <option value="Empresa">Empresa</option>
                  <option value="Grupo de amigos">Grupo de amigos</option>
                  <option value="Final de ano">Final de ano</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">
                  Nº de pessoas
                </label>
                <input
                  type="number"
                  min="1"
                  value={form.pessoas}
                  onChange={(e) => setForm({ ...form, pessoas: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">
                  Data pretendida
                </label>
                <input
                  type="date"
                  value={form.data}
                  onChange={(e) => setForm({ ...form, data: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">
                Observações
              </label>
              <textarea
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm resize-none"
              />
            </div>

            <Button variant="cta" size="lg" type="submit" className="w-full">
              Enviar pelo WhatsApp
            </Button>
          </form>
        </div>
      </section>

      <section className="py-12 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <p className="font-display text-2xl font-bold mb-4">
            Prefere falar direto com a equipe?
          </p>

          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Chamar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}