import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Calendar, Building2 } from "lucide-react";

export default function ConfraternizacoesBlock() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Confraternizações na Embaixada
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Aniversários, encontros de empresa, happy hours e celebrações especiais. A gente cuida de tudo para seu evento ser inesquecível.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
          <div className="bg-card rounded-xl p-6 shadow-card">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1">Grupos e Famílias</h3>
            <p className="text-xs text-muted-foreground">Espaço para grandes turmas</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1">Datas Especiais</h3>
            <p className="text-xs text-muted-foreground">Aniversários e comemorações</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-card">
            <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display font-semibold text-foreground mb-1">Empresas</h3>
            <p className="text-xs text-muted-foreground">Eventos corporativos</p>
          </div>
        </div>
        <Button variant="cta" size="lg" asChild>
          <Link to="/confraternizacoes">Solicitar Orçamento</Link>
        </Button>
      </div>
    </section>
  );
}
