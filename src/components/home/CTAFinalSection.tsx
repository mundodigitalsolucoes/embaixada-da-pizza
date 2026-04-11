import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CARDAPIO_URL = "#cardapio-web";
const WHATSAPP_URL = "https://wa.me/551732261279";

export default function CTAFinalSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-hero text-primary-foreground">
      <div className="container text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Pronto para pedir a melhor pizza de Rio Preto?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Faça seu pedido agora, entre para o Cliente Embaixador ou fale com a gente. A Embaixada está esperando você.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="cta" size="lg" asChild>
            <a href={CARDAPIO_URL}>Pedir Agora</a>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
          </Button>
          <Button variant="gold" size="lg" asChild>
            <Link to="/cliente-embaixador">Cliente Embaixador</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
