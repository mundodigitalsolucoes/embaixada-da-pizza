import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "551732261279";

export default function ChatwootWidget() {
  const openSupport = () => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source") || "site";
    const utmMedium = params.get("utm_medium") || "widget_atendimento";
    const utmCampaign = params.get("utm_campaign") || "atendimento_site";
    const utmContent = params.get("utm_content") || "widget_whatsapp";
    const page = window.location.pathname || "/";

    const message = [
      "Olá! Vim pelo site da Embaixada da Pizza e preciso de atendimento.",
      "",
      `Origem: ${utmSource}`,
      `Mídia: ${utmMedium}`,
      `Campanha: ${utmCampaign}`,
      `Conteúdo: ${utmContent}`,
      `Página: ${page}`,
    ].join("\n");

    const dataLayerWindow = window as typeof window & {
      dataLayer?: Array<Record<string, unknown>>;
    };

    dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
    dataLayerWindow.dataLayer.push({
      event: "whatsapp_click",
      source: utmSource,
      medium: utmMedium,
      campaign: utmCampaign,
      content: utmContent,
      page_path: page,
    });

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={openSupport}
      className="flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-[hsl(142_70%_40%)] text-primary-foreground px-5 py-3 rounded-full shadow-premium hover:shadow-lg transition-all group"
      aria-label="Abrir atendimento no WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-semibold group-hover:underline">WhatsApp</span>
    </button>
  );
}
