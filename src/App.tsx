import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/layout/Layout";
import Home from "./pages/Index";
import DeliveryPage from "./pages/DeliveryPage";
import ClienteEmbaixadorPage from "./pages/ClienteEmbaixadorPage";
import RodizioPage from "./pages/RodizioPage";
import ConfraternizacoesPage from "./pages/ConfraternizacoesPage";
import BlogPage from "./pages/BlogPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/cliente-embaixador" element={<ClienteEmbaixadorPage />} />
            <Route path="/rodizio" element={<RodizioPage />} />
            <Route path="/confraternizacoes" element={<ConfraternizacoesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
