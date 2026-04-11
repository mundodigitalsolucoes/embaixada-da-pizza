import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/551732261279?text=Olá! Gostaria de saber mais sobre o rodízio.";

export default function RodizioBlock() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="bg-card rounded-2xl shadow-premium overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-hero p-8 md:p-12 lg:p-16 text-primary-foreground flex flex-col justify-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Rodízio de Pizza — Todos os Dias
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                A experiência completa do rodízio da Embaixada: variedade de sabores, massa artesanal e ingredientes selecionados. Traga a família, os amigos ou venha a dois.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Reservar Mesa</a>
                </Button>
                <Button variant="ctaOutline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                  <a href="https://maps.google.com/?q=R.+Paulo+Vidali,+250+Higienópolis+São+José+do+Rio+Preto" target="_blank" rel="noopener noreferrer">
                    Como Chegar
                  </a>
                </Button>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ambiente Acolhedor</h3>
                <p className="text-sm text-muted-foreground">Espaço pensado para conforto, com atendimento atencioso e clima ideal para qualquer ocasião.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Tradição e Qualidade</h3>
                <p className="text-sm text-muted-foreground">Mais de 20 anos servindo a melhor pizza de São José do Rio Preto com receitas exclusivas.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Todos os Dias</h3>
                <p className="text-sm text-muted-foreground">Nosso rodízio funciona todos os dias da semana. Não espere a sexta — venha quando quiser.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
