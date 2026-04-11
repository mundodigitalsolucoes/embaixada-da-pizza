import { ShoppingBag, MessageCircle, Headphones } from "lucide-react";

const CARDAPIO_URL = "#cardapio-web";
const WHATSAPP_URL = "https://wa.me/551732261279";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-3">
        <a
          href={CARDAPIO_URL}
          className="flex flex-col items-center justify-center py-3 text-cta-foreground bg-gradient-cta"
        >
          <ShoppingBag className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-semibold">Pedir</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-primary-foreground bg-[hsl(142_70%_40%)]"
        >
          <MessageCircle className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <button
          onClick={() => {
            const event = new CustomEvent("open-chatwoot");
            window.dispatchEvent(event);
          }}
          className="flex flex-col items-center justify-center py-3 text-primary-foreground bg-primary"
        >
          <Headphones className="w-5 h-5 mb-0.5" />
          <span className="text-xs font-semibold">Atendimento</span>
        </button>
      </div>
    </div>
  );
}
