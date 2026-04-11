import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Users, Clock, MapPin } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/551732221279?text=Olá! Gostaria de saber mais sobre o rodízio da Embaixada da Pizza.";
const MAPS_URL =
  "https://maps.google.com/?q=R.+Paulo+Vidali,+250+Higienópolis+São+José+do+Rio+Preto";

const rodizioJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Embaixada da Pizza",
  url: "https://embaixadadapizza.com.br/rodizio",
  telephone: "+55 17 3222-1279",
  servesCuisine: "Pizza",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Paulo Vidali, 250",
    addressLocality: "São José do Rio Preto",
    addressRegion: "SP",
    postalCode: "15085-470",
    addressCountry: "BR",
  },
};

export default function RodizioPage() {
  return (
    <>
      <SEO
        title="Rodízio de Pizza em São José do Rio Preto | Embaixada da Pizza"
        description="Aproveite o rodízio de pizza da Embaixada da Pizza no Higienópolis, em São José do Rio Preto. Tradição, variedade e experiência completa no salão."
        canonical="https://embaixadadapizza.com.br/rodizio"
        keywords="rodízio de pizza em São José do Rio Preto, rodízio de pizza Rio Preto, pizzaria Higienópolis, Embaixada da Pizza, rodízio todos os dias"
        ogTitle="Rodízio de Pizza em São José do Rio Preto | Embaixada da Pizza"
        ogDescription="Conheça o rodízio da Embaixada da Pizza no Higienópolis. Variedade, tradição e experiência completa no salão."
        ogType="website"
        jsonLd={rodizioJsonLd}
      />

      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Rodízio de pizza em São José do Rio Preto, todos os dias
          </h1>

          <p className="text-primary-foreground/80 text-lg mb-8">
            Viva a experiência completa do rodízio da{" "}
            <strong>Embaixada da Pizza</strong> no Higienópolis, com variedade,
            tradição e um ambiente pensado para famílias, casais, amigos e grupos.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Reservar Mesa
              </a>
            </Button>

            <Button
              variant="ctaOutline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                Como Chegar
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">
            Por que o rodízio da Embaixada é diferente?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: UtensilsCrossed,
                title: "Variedade de Sabores",
                desc: "Rodízio com variedade para agradar quem ama pizza clássica e quem busca algo especial.",
              },
              {
                icon: Users,
                title: "Perfeito para Grupos",
                desc: "Ideal para famílias, casais, amigos e confraternizações em pizzaria em Rio Preto.",
              },
              {
                icon: Clock,
                title: "Todos os Dias",
                desc: "O rodízio funciona todos os dias, trazendo mais praticidade para a sua rotina.",
              },
              {
                icon: MapPin,
                title: "Higienópolis",
                desc: "Estamos em uma localização estratégica em São José do Rio Preto, com fácil acesso.",
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
            A experiência do salão
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-2xl bg-card border border-border shadow-card p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Ambiente acolhedor
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Um espaço pensado para criar boas memórias, com clima agradável
                  e experiência ideal para quem quer curtir pizza em família ou
                  com amigos.
                </p>
              </div>

              <div className="rounded-2xl bg-card border border-border shadow-card p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Tradição em Rio Preto
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Embaixada da Pizza é uma marca forte em São José do Rio Preto,
                  unindo rodízio, salão e delivery com presença consolidada no
                  Higienópolis.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-card border border-border shadow-card p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Atendimento atencioso
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A experiência vai além da pizza. O atendimento é parte
                  importante do que faz a visita à Embaixada ser tão marcante.
                </p>
              </div>

              <div className="rounded-2xl bg-card border border-border shadow-card p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Ideal para ocasiões especiais
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  O salão também é uma excelente escolha para aniversários,
                  encontros e confraternizações em pizzaria em São José do Rio Preto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">
            Venha experimentar o rodízio da Embaixada
          </h2>

          <p className="text-primary-foreground/80 mb-8">
            Reserve sua mesa e aproveite uma experiência completa em uma pizzaria
            em São José do Rio Preto que já faz parte da tradição local.
          </p>

          <Button variant="cta" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Reservar pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}