import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Gift, Zap, CheckCircle, Star, ShoppingBag } from "lucide-react";
import mascote from "@/assets/mascote-corpo-inteiro.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CARDAPIO_URL = "#cardapio-web";
const CADASTRO_URL = "#cadastro-embaixador";

const steps = [
  { num: "1", title: "Cadastre-se grátis", desc: "Crie sua conta em segundos e já ganhe um benefício de boas-vindas." },
  { num: "2", title: "Peça pelo Cardápio Web", desc: "Faça seus pedidos pelo nosso canal próprio e acumule pontos automaticamente." },
  { num: "3", title: "Acumule pontos", desc: "Cada R$1 gasto = 1 ponto. Simples assim." },
  { num: "4", title: "Resgate recompensas", desc: "Troque seus pontos por pizzas, descontos e benefícios exclusivos." },
];

const benefits = [
  "Benefício de entrada no cadastro",
  "Frete grátis em pedidos selecionados",
  "R$1 = 1 ponto em cada pedido",
  "Recompensas exclusivas",
  "Promoções antecipadas",
  "Descontos progressivos",
  "Acesso a sabores especiais",
  "Vantagem na próxima compra",
];

const faqsEmbaixador = [
  { q: "O cadastro é gratuito?", a: "Sim! O cadastro no Cliente Embaixador é 100% gratuito e você já ganha um benefício de boas-vindas." },
  { q: "Como acumulo pontos?", a: "A cada R$1 gasto em pedidos pelo Cardápio Web, você ganha 1 ponto automaticamente." },
  { q: "Meus pontos expiram?", a: "Consulte as regras do programa para detalhes sobre validade dos pontos." },
  { q: "Posso usar no rodízio?", a: "O programa funciona para pedidos no Cardápio Web. Benefícios no rodízio podem ser incluídos em campanhas especiais." },
  { q: "Como resgato recompensas?", a: "Acesse sua conta no Cardápio Web, veja seu saldo e escolha a recompensa disponível." },
];

export default function ClienteEmbaixador() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1.5 text-sm font-semibold">
                <Award className="w-4 h-4 text-accent" /> Programa de Fidelidade
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cliente <span className="text-accent">Embaixador</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-lg leading-relaxed">
                O programa que transforma cada pedido em vantagem. Cadastre-se gratuitamente, acumule pontos e resgate recompensas exclusivas da Embaixada da Pizza.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href={CADASTRO_URL}>Cadastrar Grátis</a>
                </Button>
                <Button variant="gold" size="lg" asChild>
                  <a href={CARDAPIO_URL}>Fazer Primeiro Pedido</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={mascote} alt="Mascote Embaixada da Pizza" className="w-64 md:w-80 drop-shadow-2xl" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Como funciona
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div key={s.num} className="text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center font-display text-2xl font-bold text-accent-foreground">
                  {s.num}
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefícios e <span className="text-gradient-gold">Recompensas</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-premium text-center">
              <Star className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">R$1 = 1 ponto</h3>
              <p className="text-muted-foreground mb-6">A cada pedido no Cardápio Web, seus pontos aumentam. Quanto mais você pede, mais vantagem tem.</p>
              <Button variant="cta" size="lg" asChild>
                <a href={CADASTRO_URL}>Quero Participar</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagem canal próprio */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container text-center max-w-3xl">
          <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Vantagem de pedir no canal próprio
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Quando você pede pelo Cardápio Web da Embaixada, cada real vira ponto, você acessa promoções exclusivas e ajuda a manter os preços justos — sem taxas de aplicativos.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href={CARDAPIO_URL}>Abrir Cardápio Web</a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Dúvidas sobre o programa
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqsEmbaixador.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl px-6 shadow-card border-none">
                <AccordionTrigger className="font-display text-foreground text-left font-semibold text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Regras */}
      <section className="py-12 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">Regras do Programa</h2>
          <div className="bg-card rounded-xl p-6 shadow-card text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>• O programa Cliente Embaixador é gratuito e exclusivo para pedidos realizados pelo Cardápio Web.</p>
            <p>• Pontos são acumulados automaticamente: R$1 gasto = 1 ponto.</p>
            <p>• Recompensas disponíveis podem variar conforme campanhas e saldo de pontos.</p>
            <p>• A Embaixada da Pizza se reserva o direito de alterar as condições do programa com aviso prévio.</p>
            <p>• Consulte sempre o regulamento completo atualizado.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Comece agora. É grátis.
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Cadastre-se no Cliente Embaixador e ganhe vantagens desde o primeiro pedido.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href={CADASTRO_URL}>Cadastrar Agora</a>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <a href={CARDAPIO_URL}>Fazer Primeiro Pedido</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
