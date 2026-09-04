import { useEffect } from "react";

const BIO_URL = "https://embaixada-da-pizza-bio.fabioalvestopmix.chatgpt.site/";

export default function BioPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const previousOverflow = document.documentElement.style.overflow;

    document.title = "Embaixada da Pizza | Cardápio, reservas e promoções";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.title = previousTitle;
      document.documentElement.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <main className="h-screen w-full overflow-hidden bg-[#f7f4ec]">
      <iframe
        src={BIO_URL}
        title="Embaixada da Pizza | Cardápio, reservas e promoções"
        className="h-full w-full border-0"
        allow="clipboard-write"
      />
    </main>
  );
}
