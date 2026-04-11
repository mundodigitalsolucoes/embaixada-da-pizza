import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Onde fica a Embaixada da Pizza?", a: "Estamos na R. Paulo Vidali, 250, no bairro Higienópolis, em São José do Rio Preto – SP. Fácil acesso e estacionamento próximo." },
  { q: "Tem rodízio todos os dias?", a: "Sim! Nosso rodízio funciona todos os dias da semana. Venha quando quiser e aproveite a variedade de sabores." },
  { q: "Como faço para pedir pelo delivery?", a: "Acesse nosso Cardápio Web, escolha seus sabores e finalize o pedido. Entregamos em Higienópolis e região com rapidez." },
  { q: "Como funciona o programa Cliente Embaixador?", a: "Cadastre-se gratuitamente e acumule pontos a cada pedido (R$1 = 1 ponto). Troque por recompensas exclusivas como pizzas grátis e descontos." },
  { q: "Como faço uma confraternização na Embaixada?", a: "Entre em contato pelo WhatsApp ou pela página de confraternizações do site. Montamos orçamentos para aniversários, empresas e grupos." },
  { q: "Vocês atendem Higienópolis e região?", a: "Sim! Atendemos Higienópolis e diversos bairros de São José do Rio Preto via delivery pelo nosso Cardápio Web." },
  { q: "Qual o horário de funcionamento?", a: "Funcionamos todos os dias. Consulte nossos horários atualizados pelo WhatsApp ou redes sociais." },
  { q: "Como entrar em contato?", a: "Pelo telefone (17) 3226-1279, WhatsApp ou pela nossa Central de Atendimento aqui no site." },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground">Tire suas dúvidas sobre a Embaixada da Pizza.</p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
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
  );
}
