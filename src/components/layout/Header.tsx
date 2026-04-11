import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-embaixada.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Delivery", href: "/delivery" },
  { label: "Rodízio", href: "/rodizio" },
  { label: "Cliente Embaixador", href: "/cliente-embaixador" },
  { label: "Confraternizações", href: "/confraternizacoes" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

const WHATSAPP_URL = "https://wa.me/551732261279?text=Olá! Gostaria de mais informações.";
const CARDAPIO_URL = "#cardapio-web";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-premium py-2" : "bg-primary/95 py-3"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Embaixada da Pizza" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "text-accent"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="gold" size="sm" asChild>
            <Link to="/cliente-embaixador">Cliente Embaixador</Link>
          </Button>
          <Button variant="cta" size="sm" asChild>
            <a href={CARDAPIO_URL}>Pedir Agora</a>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="p-2 text-primary-foreground">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-primary-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`px-4 py-3 rounded-md text-sm font-medium ${
                  location.pathname === l.href
                    ? "text-accent bg-primary-foreground/5"
                    : "text-primary-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 px-4">
              <Button variant="gold" asChild>
                <Link to="/cliente-embaixador">Cliente Embaixador</Link>
              </Button>
              <Button variant="cta" asChild>
                <a href={CARDAPIO_URL}>Pedir Agora</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
