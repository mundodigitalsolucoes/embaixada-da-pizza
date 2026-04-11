import { useEffect, useCallback, useState } from "react";
import { Headphones } from "lucide-react";

export default function ChatwootWidget() {
  const [loaded, setLoaded] = useState(false);

  const loadChatwoot = useCallback(() => {
    if (loaded) return;
    setLoaded(true);
    // Placeholder: inject Chatwoot script here
    // const script = document.createElement("script");
    // script.src = "https://your-chatwoot-instance.com/packs/js/sdk.js";
    // script.async = true;
    // script.onload = () => { window.chatwootSDK.run({ ... }) };
    // document.body.appendChild(script);
    console.log("Chatwoot: ready to load script");
  }, [loaded]);

  useEffect(() => {
    // Load after 5s or on first interaction
    const timer = setTimeout(loadChatwoot, 5000);
    const onInteraction = () => { loadChatwoot(); cleanup(); };
    const onCustomOpen = () => { loadChatwoot(); };

    window.addEventListener("scroll", onInteraction, { once: true, passive: true });
    window.addEventListener("click", onInteraction, { once: true });
    window.addEventListener("open-chatwoot", onCustomOpen);

    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onInteraction);
      window.removeEventListener("click", onInteraction);
    }

    return () => {
      cleanup();
      window.removeEventListener("open-chatwoot", onCustomOpen);
    };
  }, [loadChatwoot]);

  return (
    <button
      onClick={loadChatwoot}
      className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-premium hover:shadow-lg transition-all group"
      aria-label="Abrir Central de Atendimento"
    >
      <Headphones className="w-5 h-5" />
      <span className="text-sm font-semibold group-hover:underline">Atendimento</span>
    </button>
  );
}
