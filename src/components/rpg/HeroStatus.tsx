import { Button } from "@/components/ui/button";
import { RpgWindow } from "./RpgWindow";
import { Mail, Linkedin, Github, FileText, Phone } from "lucide-react";

export const HeroStatus = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <RpgWindow variant="hero" className="max-w-2xl w-full text-center glow-animation">
        {/* Character Portrait */}
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-hero border-hero-gold border-2 rounded-full flex items-center justify-center text-2xl font-hero text-primary-foreground">
          WW
        </div>
        
        {/* Hero Name */}
        <h1 className="text-2xl md:text-3xl font-hero text-hero-gold mb-2 drop-shadow-lg">
          WENDERSON SOARES WERNECK
        </h1>
        
        {/* Character Class */}
        <div className="quest-log-title mb-8">
          CLASSE: ANALISTA DE DADOS & BI
        </div>
        
        {/* Inventory/Contact Icons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="inventory" size="icon" asChild>
            <a href="tel:+5527996185461" aria-label="Telefone">
              <Phone className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="inventory" size="icon" asChild>
            <a href="mailto:cfpromik@gmail.com" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="inventory" size="icon" asChild>
            <a href="https://linkedin.com/in/wendersonwerneck" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="inventory" size="icon" asChild>
            <a href="#projetos" aria-label="Portfolio">
              <FileText className="w-4 h-4" />
            </a>
          </Button>
        </div>
        
        {/* Navigation Menu */}
        <nav className="flex flex-wrap justify-center gap-3 text-xs">
          <Button variant="quest" size="sm" asChild>
            <a href="#sobre">Sobre</a>
          </Button>
          <Button variant="quest" size="sm" asChild>
            <a href="#habilidades">Habilidades</a>
          </Button>
          <Button variant="quest" size="sm" asChild>
            <a href="#projetos">Projetos</a>
          </Button>
          <Button variant="quest" size="sm" asChild>
            <a href="#formacao">Formação</a>
          </Button>
          <Button variant="quest" size="sm" asChild>
            <a href="#feedback">Feedback</a>
          </Button>
        </nav>
      </RpgWindow>
    </div>
  );
};