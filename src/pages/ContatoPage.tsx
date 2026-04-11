import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, MessageCircle, ShoppingBag, Headphones, Users } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/551732261279";
const CARDAPIO_URL = "#cardapio-web";

const atalhos = [
  { icon: ShoppingBag, label: "Pedir Agora", desc: "Abra o Cardápio Web", href: CARDAPIO_URL, color: "bg-gradient-cta text-cta-foreground" },
  { icon: MessageCircle, label: "WhatsApp", desc: "Fale com a gente", href: WHATSAPP_URL, color: "bg-[hsl(142_70%_40%)] text-primary-foreground", external: true },
  { icon: Headphones, label: "Tirar Dúvidas", desc: "Central de Atendimento", href: "/contato#atendimento", color: "bg-primary text-primary-foreground" },
  { icon: Users, label: "Confraternização", desc: "Solicite orçamento", href: "/confraternizacoes", color: "bg-accent text-accent-foreground" },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Contato e Atendimento</h1>
          <p className="text-primary-foreground/80 text-lg">Fale com a Embaixada da Pizza. Estamos prontos para ajudar.</p>
        </div>
      </section>

      {/* Info + Mapa */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground">Informações</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-sm text-muted-foreground">R. Paulo Vidali, 250 – Higienópolis, São José do Rio Preto – SP</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Telefone</p>
                    <p className="text-sm text-muted-foreground">(17) 3226-1279</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Horários</p>
                    <p className="text-sm text-muted-foreground">Todos os dias — consulte horários atualizados pelo WhatsApp</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </Button>
                <Button variant="cta" size="lg" asChild>
                  <a href={CARDAPIO_URL}>Cardápio Web</a>
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-card h-80 lg:h-auto">
              <iframe
                title="Localização Embaixada da Pizza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.0!2d-49.38!3d-20.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQ4JzAwLjAiUyA0OcKwMjInNDguMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Central de Atendimento */}
      <section id="atendimento" className="py-12 md:py-16 bg-secondary">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Central de Atendimento
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Escolha o canal que preferir. Estamos aqui para pedidos, dúvidas, reservas e orçamentos.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {atalhos.map((a) => (
              <a
                key={a.label}
                href={a.href}
                target={a.external ? "_blank" : undefined}
                rel={a.external ? "noopener noreferrer" : undefined}
                className={`${a.color} rounded-xl p-5 text-center hover:opacity-90 transition-opacity`}
              >
                <a.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="font-semibold">{a.label}</p>
                <p className="text-xs opacity-80">{a.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
