import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Users, Clock, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551732261279?text=Olá! Gostaria de saber mais sobre o rodízio.";

export default function RodizioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Rodízio de Pizza — Todos os Dias
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8">
            A experiência completa do rodízio em São José do Rio Preto. Variedade, qualidade e atendimento que fazem da Embaixada uma tradição no bairro Higienópolis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
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
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: UtensilsCrossed, title: "Variedade de Sabores", desc: "Dezenas de opções no rodízio, do clássico ao especial" },
              { icon: Users, title: "Para Todos", desc: "Famílias, casais, amigos e grupos corporativos" },
              { icon: Clock, title: "Todos os Dias", desc: "Nosso rodízio funciona todos os dias da semana" },
              { icon: MapPin, title: "Higienópolis", desc: "R. Paulo Vidali, 250 — fácil acesso e estacionamento" },
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

      {/* Experiência */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
            A experiência do salão
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ambiente Acolhedor</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Salão climatizado, iluminação agradável e espaço confortável para todas as idades. Ideal para jantares em família ou encontros entre amigos.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Tradição de Rio Preto</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Há mais de 20 anos servindo a melhor pizza do bairro Higienópolis. Receitas exclusivas e massa artesanal que fazem a diferença.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Atendimento Atencioso</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Equipe treinada para oferecer a melhor experiência. Do momento que você chega até o último pedaço, cuidamos de tudo.</p>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Eventos e Confraternizações</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Espaço disponível para aniversários, confraternizações de empresa e encontros especiais. Fale conosco para orçamentos personalizados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">Venha experimentar</h2>
          <p className="text-primary-foreground/80 mb-8">Reserve sua mesa ou simplesmente apareça. O rodízio funciona todos os dias.</p>
          <Button variant="cta" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Reservar pelo WhatsApp</a>
          </Button>
        </div>
      </section>
    </>
  );
}
