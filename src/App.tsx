import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Access from "./pages/Access";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Technology from "./pages/Technology";
import About from "./pages/About";
import JayLesser from "./pages/JayLesser";
import BreakthroughPortfolio from "./pages/BreakthroughPortfolio";
import Renaissance from "./pages/Renaissance";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/access" element={<Access />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/jay-lesser" element={<JayLesser />} />
          <Route path="/why-invest" element={<BreakthroughPortfolio />} />
          <Route path="/renaissance" element={<Renaissance />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;