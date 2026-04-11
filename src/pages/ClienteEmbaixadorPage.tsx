import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle,
  Gift,
  ShoppingBag,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import mascote from "@/assets/mascote-embaixada-transparencia.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CARDAPIO_URL = "https://cardapio.embaixadadapizza.com.br/";
const CADASTRO_URL = "https://cliente.embaixadadapizza.com.br/";

const steps = [
  {
    num: "1",
    title: "Cadastre-se grátis",
    desc: "Entre para o Cliente Embaixador de forma rápida e gratuita.",
  },
  {
    num: "2",
    title: "Faça seu pedido direto",
    desc: "Peça pelo canal próprio da Embaixada da Pizza no Cardápio Web.",
  },
  {
    num: "3",
    title: "Acumule pontos",
    desc: "A cada R$ 1 em produtos, você ganha 1 ponto no programa.",
  },
  {
    num: "4",
    title: "Resgate vantagens",
    desc: "Troque seus pontos por descontos, frete grátis e recompensas.",
  },
];

const benefits = [
  "Cadastro gratuito no programa",
  "Vantagens para quem pede no canal próprio",
  "R$ 1 em produtos = 1 ponto",
  "Frete grátis em campanhas e resgates",
  "Descontos e recompensas exclusivas",
  "Mais incentivo para a próxima compra",
  "Programa pensado para aumentar sua vantagem real",
  "Mais benefícios sem depender de app terceiro",
];

const faqsEmbaixador = [
  {
    q: "O Cliente Embaixador é gratuito?",
    a: "Sim. O cadastro no Cliente Embaixador é gratuito e foi criado para valorizar quem pede direto pela Embaixada da Pizza.",
  },
  {
    q: "Como eu acumulo pontos?",
    a: "Você acumula 1 ponto a cada R$ 1 em produtos nos pedidos realizados pelo Cardápio Web, conforme as regras ativas do programa.",
  },
  {
    q: "O programa vale para qualquer pedido?",
    a: "O foco principal do Cliente Embaixador é o canal próprio, com pedidos feitos pelo Cardápio Web.",
  },
  {
    q: "Quais vantagens eu posso ter?",
    a: "As vantagens podem incluir frete grátis, descontos, produtos e campanhas exclusivas, conforme a configuração ativa do programa.",
  },
  {
    q: "Por que pedir no canal próprio?",
    a: "Porque além de pedir direto com a Embaixada da Pizza, você acumula pontos, acessa vantagens exclusivas e fortalece sua relação com a marca.",
  },
];

const embaixadorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cliente Embaixador | Embaixada da Pizza",
  url: "https://embaixadadapizza.com.br/cliente-embaixador",
  description:
    "Cadastre-se no Cliente Embaixador, acumule pontos e ganhe vantagens exclusivas pedindo direto pela Embaixada da Pizza em São José do Rio Preto.",
  isPartOf: {
    "@type": "WebSite",
    name: "Embaixada da Pizza",
    url: "https://embaixadadapizza.com.br/",
  },
};

export default function ClienteEmbaixadorPage() {
  return (
    <>
      <SEO
        title="Cliente Embaixador | Fidelidade da Embaixada da Pizza"
        description="Cadastre-se no Cliente Embaixador e ganhe vantagens exclusivas pedindo direto pela Embaixada da Pizza em São José do Rio Preto."
        canonical="https://embaixadadapizza.com.br/cliente-embaixador"
        keywords="cliente embaixador, fidelidade pizzaria, programa de pontos pizzaria, Embaixada da Pizza, pizzaria São José do Rio Preto, pizza delivery Higienópolis"
        ogTitle="Cliente Embaixador | Fidelidade da Embaixada da Pizza"
        ogDescription="Peça direto, acumule pontos e ganhe vantagens exclusivas com o Cliente Embaixador."
        ogType="website"
        jsonLd={embaixadorJsonLd}
      />

      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                <Award className="w-4 h-4 text-accent" />
                Programa de fidelidade da Embaixada
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cliente <span className="text-accent">Embaixador</span>
              </h1>

              <p className="text-primary-foreground/80 text-lg max-w-xl leading-relaxed">
                O programa que valoriza quem pede direto. Cadastre-se
                gratuitamente, acumule pontos no canal próprio e transforme seus
                pedidos em vantagens reais na <strong>Embaixada da Pizza</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a
                    href={CADASTRO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cadastrar Grátis
                  </a>
                </Button>

                <Button variant="gold" size="lg" asChild>
                  <a
                    href={CARDAPIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fazer Primeiro Pedido
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/65">
                <span>⭐ Fidelidade com vantagem real</span>
                <span>📍 São José do Rio Preto</span>
                <span>🍕 Canal próprio</span>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-accent/20 blur-3xl opacity-70" />
              </div>

              <img
                src={mascote}
                alt="Mascote da Embaixada da Pizza apresentando o Cliente Embaixador"
                className="relative z-10 w-[320px] md:w-[420px] lg:w-[500px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Como funciona o Cliente Embaixador
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl bg-card border border-border shadow-card p-6 text-center space-y-3"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-accent flex items-center justify-center font-display text-2xl font-bold text-accent-foreground">
                  {s.num}
                </div>

                <h3 className="font-display font-semibold text-foreground text-lg">
                  {s.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefícios e{" "}
                <span className="text-gradient-gold">vantagens exclusivas</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-premium text-center space-y-4">
              <Star className="w-12 h-12 text-accent mx-auto" />
              <h3 className="font-display text-2xl font-bold text-foreground">
                R$ 1 = 1 ponto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No Cliente Embaixador, cada pedido no canal próprio aproxima você
                de novas vantagens. Quanto mais você pede direto, mais faz sentido
                continuar com a Embaixada.
              </p>

              <Button variant="cta" size="lg" asChild>
                <a
                  href={CADASTRO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quero Participar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Vantagem de pedir no canal próprio
          </h2>

          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Quando você pede direto pela Embaixada da Pizza, além de aproveitar
            uma experiência mais próxima da marca, ainda entra numa lógica de
            recompra inteligente com benefícios, fidelidade e mais valor em cada
            pedido.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl bg-card border border-border p-5 shadow-card">
              <Truck className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground">Canal próprio</p>
              <p className="text-sm text-muted-foreground mt-1">
                Mais controle e mais vantagem pra quem pede direto.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border p-5 shadow-card">
              <Gift className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground">Recompensas</p>
              <p className="text-sm text-muted-foreground mt-1">
                Pontos e vantagens que estimulam a próxima compra.
              </p>
            </div>

            <div className="rounded-xl bg-card border border-border p-5 shadow-card">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground">Mais valor</p>
              <p className="text-sm text-muted-foreground mt-1">
                Fidelidade pensada para gerar benefício real, não só cadastro.
              </p>
            </div>
          </div>

          <Button variant="gold" size="lg" asChild>
            <a
              href={CARDAPIO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Cardápio Web
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Dúvidas sobre o programa
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqsEmbaixador.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
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

      <section className="py-12 bg-background">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">
            Regras do Programa
          </h2>

          <div className="bg-card rounded-xl p-6 shadow-card text-sm text-muted-foreground space-y-2 leading-relaxed">
            <p>
              • O Cliente Embaixador é voltado para pedidos realizados no canal
              próprio da Embaixada da Pizza.
            </p>
            <p>
              • O cadastro é gratuito e as vantagens seguem as regras ativas do
              programa.
            </p>
            <p>
              • A pontuação considera os produtos elegíveis conforme a
              configuração vigente.
            </p>
            <p>
              • Benefícios, resgates e campanhas podem variar ao longo do tempo.
            </p>
            <p>
              • Consulte sempre o regulamento atualizado na página oficial do
              programa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Comece agora. É grátis.
          </h2>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Entre no Cliente Embaixador e transforme seus pedidos em vantagens
            reais com a Embaixada da Pizza.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cadastrar Agora
              </a>
            </Button>

            <Button variant="gold" size="lg" asChild>
              <a
                href={CARDAPIO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer Primeiro Pedido
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}