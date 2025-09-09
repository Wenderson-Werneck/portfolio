import { Button } from "@/components/ui/button";
import { RpgWindow } from "./RpgWindow";
import { QuestLog } from "./QuestLog";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Estruturação de Banco de Dados em Nuvem",
    description: "Desenvolvimento e implementação de um banco de dados relacional em PostgreSQL hospedado na AWS (via Neon Tech), garantindo escalabilidade e performance para consultas analíticas.",
    technologies: ["PostgreSQL", "AWS", "Cloud"],
    link: "#"
  },
  {
    title: "Automação de Relatórios com Google Apps Script",
    description: "Criação de scripts para automatizar a coleta, limpeza e visualização de dados operacionais em Google Sheets, reduzindo o trabalho manual e otimizando processos.",
    technologies: ["Google Apps Script", "JavaScript", "Google Sheets"],
    link: "#"
  },
  {
    title: "Dashboard Analítico de Vendas",
    description: "Desenvolvimento de dashboard interativo no Power BI para análise de desempenho de vendas, com KPIs, tendências e segmentação por regiões e produtos.",
    technologies: ["Power BI", "DAX", "SQL"],
    link: "#"
  }
];

export const ProjectCards = () => {
  return (
    <QuestLog title="PROJETOS EM DESTAQUE" id="projetos">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <RpgWindow key={idx} variant="quest" className="h-full flex flex-col">
            <h3 className="text-magic-green font-pixel text-xs mb-3 uppercase leading-tight">
              {project.title}
            </h3>
            
            <p className="text-xs text-muted-foreground mb-4 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="bg-item-bronze text-foreground px-2 py-1 text-xs border border-item-bronze">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button variant="magic" size="sm" className="w-full" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Ver Projeto <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          </RpgWindow>
        ))}
      </div>
    </QuestLog>
  );
};