import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShoppingBag,
  Headphones,
  Users,
  Instagram,
  Facebook,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551732221279?text=Olá! Gostaria de mais informações sobre a Embaixada da Pizza.";
const CARDAPIO_URL = "https://cardapio.embaixadadapizza.com.br/";
const INSTAGRAM_URL = "https://www.instagram.com/embaixadadapizzarp/";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61550981906994";

const contatoJsonLd = {
  "@context": "https://schema.org",
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
  sameAs: [INSTAGRAM_URL, FACEBOOK_URL],
};

const atalhos = [
  {
    icon: ShoppingBag,
    label: "Pedir Agora",
    desc: "Abra o Cardápio Web",
    href: CARDAPIO_URL,
    color: "bg-gradient-cta text-cta-foreground",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    desc: "Fale com a gente",
    href: WHATSAPP_URL,
    color: "bg-[hsl(142_70%_40%)] text-primary-foreground",
    external: true,
  },
  {
    icon: Headphones,
    label: "Tirar Dúvidas",
    desc: "Central de Atendimento",
    href: "/contato#atendimento",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Users,
    label: "Confraternização",
    desc: "Solicite orçamento",
    href: "/confraternizacoes",
    color: "bg-accent text-accent-foreground",
  },
];

export default function ContatoPage() {
  return (
    <>
      <SEO
        title="Contato da Embaixada da Pizza | São José do Rio Preto"
        description="Veja endereço, telefone, WhatsApp e redes sociais da Embaixada da Pizza no Higienópolis, em São José do Rio Preto."
        canonical="https://embaixadadapizza.com.br/contato"
        keywords="contato Embaixada da Pizza, pizzaria Higienópolis, pizzaria São José do Rio Preto, WhatsApp pizzaria Rio Preto, endereço Embaixada da Pizza"
        ogTitle="Contato da Embaixada da Pizza | São José do Rio Preto"
        ogDescription="Fale com a Embaixada da Pizza para pedidos, dúvidas, delivery, rodízio e confraternizações."
        ogType="website"
        jsonLd={contatoJsonLd}
      />

      <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
            Contato da Embaixada da Pizza em São José do Rio Preto
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Fale com a nossa pizzaria no Higienópolis para pedidos, dúvidas,
            rodízio, delivery e confraternizações.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Informações da Pizzaria
                </h2>
                <p className="text-muted-foreground mt-2">
                  Atendimento rápido para quem quer pedir pizza, tirar dúvidas ou
                  falar com a equipe da Embaixada da Pizza.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Endereço</p>
                    <p className="text-sm text-muted-foreground">
                      R. Paulo Vidali, 250
                      <br />
                      Higienópolis, São José do Rio Preto - SP
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Telefone / WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(17) 3222-1279</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Horários</p>
                    <p className="text-sm text-muted-foreground">
                      Rodízio todos os dias. Consulte os horários atualizados pelo
                      WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="whatsapp" size="lg" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>

                <Button variant="cta" size="lg" asChild>
                  <a href={CARDAPIO_URL} target="_blank" rel="noopener noreferrer">
                    Cardápio Web
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-card min-h-[320px]">
              <iframe
                title="Mapa da Embaixada da Pizza"
                src="https://www.google.com/maps?q=R.+Paulo+Vidali,+250,+Higienópolis,+São+José+do+Rio+Preto+-+SP&output=embed"
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

      <section id="atendimento" className="py-12 md:py-16 bg-secondary">
        <div className="container">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Central de Atendimento
          </h2>

          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Escolha o canal ideal para falar com a Embaixada da Pizza em São José
            do Rio Preto. Estamos aqui para pedidos, reservas, dúvidas e
            confraternizações.
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