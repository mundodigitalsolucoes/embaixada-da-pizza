import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Building2, PartyPopper, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551732261279?text=Olá! Gostaria de solicitar um orçamento para confraternização.";

export default function ConfraternizacoesPage() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", tipo: "", pessoas: "", data: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Quero solicitar orçamento para confraternização.\n\nNome: ${form.nome}\nTelefone: ${form.telefone}\nTipo: ${form.tipo}\nPessoas: ${form.pessoas}\nData: ${form.data}\n${form.mensagem ? `Obs: ${form.mensagem}` : ""}`;
    window.open(`https://wa.me/551732261279?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Confraternizações na Embaixada
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Aniversários, encontros de empresa, happy hours e celebrações especiais. Faça seu evento ser inesquecível com a melhor pizza de Rio Preto.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href="#orcamento">Solicitar Orçamento</a>
          </Button>
        </div>
      </section>

      {/* Para quem */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: PartyPopper, title: "Aniversários", desc: "Comemore com pizza de verdade" },
              { icon: Building2, title: "Empresas", desc: "Confraternizações corporativas" },
              { icon: Users, title: "Grupos", desc: "Encontros e reuniões de amigos" },
              { icon: Calendar, title: "Final de Ano", desc: "Celebrações de fim de ano" },
            ].map((d) => (
              <div key={d.title} className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary flex items-center justify-center">
                  <d.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
            Por que celebrar na Embaixada?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "Qualidade Premium", desc: "Rodízio completo com variedade e sabor incomparável." },
              { icon: Users, title: "Espaço para Grupos", desc: "Salão com capacidade para turmas grandes e pequenas." },
              { icon: Calendar, title: "Disponibilidade", desc: "Organizamos eventos em qualquer dia da semana." },
            ].map((b) => (
              <div key={b.title} className="bg-card rounded-xl p-6 shadow-card text-center">
                <b.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="orcamento" className="py-16 md:py-20 bg-background">
        <div className="container max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-4">
            Solicite seu orçamento
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Preencha os dados abaixo e entraremos em contato rapidamente.
          </p>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-premium space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Nome</label>
                <input type="text" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Telefone</label>
                <input type="tel" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Tipo de evento</label>
                <select value={form.tipo} onChange={(e) => setForm({ ...form, tipo: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm">
                  <option value="">Selecione</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="empresa">Empresa</option>
                  <option value="grupo">Grupo / Amigos</option>
                  <option value="final-de-ano">Final de ano</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Nº de pessoas</label>
                <input type="number" min="1" value={form.pessoas} onChange={(e) => setForm({ ...form, pessoas: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Data pretendida</label>
                <input type="date" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Observações</label>
              <textarea rows={3} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm resize-none" />
            </div>
            <Button variant="cta" size="lg" type="submit" className="w-full">
              Enviar pelo WhatsApp
            </Button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-hero text-primary-foreground">
        <div className="container text-center">
          <p className="font-display text-2xl font-bold mb-4">Prefere falar direto?</p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
          </Button>
        </div>
      </section>
    </>
  );
}
