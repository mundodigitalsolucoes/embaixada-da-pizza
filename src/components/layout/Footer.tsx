import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-embaixada.svg";

const CARDAPIO_URL = "#cardapio-web";
const WHATSAPP_URL = "https://wa.me/551732261279";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Embaixada da Pizza" className="h-14 w-auto" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A melhor experiência em pizza de São José do Rio Preto. Rodízio todos os dias, delivery no canal próprio e o programa Cliente Embaixador.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/embaixadadapizza" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/embaixadadapizza" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href={CARDAPIO_URL} className="hover:text-accent transition-colors">Cardápio Web / Pedir</a></li>
              <li><Link to="/cliente-embaixador" className="hover:text-accent transition-colors">Cliente Embaixador</Link></li>
              <li><Link to="/delivery" className="hover:text-accent transition-colors">Delivery</Link></li>
              <li><Link to="/rodizio" className="hover:text-accent transition-colors">Rodízio / Salão</Link></li>
              <li><Link to="/confraternizacoes" className="hover:text-accent transition-colors">Confraternizações</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Informações</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                R. Paulo Vidali, 250 – Higienópolis, São José do Rio Preto – SP
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                (17) 3226-1279
              </li>
              <li className="flex gap-2 items-start">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                Todos os dias – consulte horários
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Peça Agora</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">Faça seu pedido pelo nosso canal próprio e acumule pontos no Cliente Embaixador.</p>
            <div className="flex flex-col gap-2">
              <a href={CARDAPIO_URL} className="inline-flex items-center justify-center bg-gradient-cta text-cta-foreground font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm">
                Pedir no Cardápio Web
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[hsl(142_70%_40%)] text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Embaixada da Pizza. Todos os direitos reservados.</p>
          <p className="mt-1 md:mt-0">São José do Rio Preto – SP | Higienópolis</p>
        </div>
      </div>
    </footer>
  );
}
