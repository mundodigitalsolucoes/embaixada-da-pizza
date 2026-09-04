import { Headphones } from "lucide-react";

export default function ChatwootWidget() {
  const openSupport = () => {
    const widgetWindow = window as typeof window & {
      $chatwoot?: { toggle?: (state?: "open" | "close") => void };
      MDSAtendimentoWidget?: { open?: () => void };
    };

    if (widgetWindow.MDSAtendimentoWidget?.open) {
      widgetWindow.MDSAtendimentoWidget.open();
      return;
    }

    if (widgetWindow.$chatwoot?.toggle) {
      widgetWindow.$chatwoot.toggle("open");
      return;
    }

    window.open(
      "https://wa.me/551732261279?text=Olá! Preciso de atendimento da Embaixada da Pizza.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={openSupport}
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-premium hover:shadow-lg transition-all group"
      aria-label="Abrir Central de Atendimento"
    >
      <Headphones className="w-5 h-5" />
      <span className="text-sm font-semibold group-hover:underline">Atendimento</span>
    </button>
  );
}
