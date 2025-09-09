import { RpgWindow } from "./RpgWindow";
import { QuestLog } from "./QuestLog";

const educationItems = [
  {
    title: "Bacharelado em Ciência de Dados e Inteligência Artificial",
    institution: "UniDom Bosco",
    status: "2025 - Em andamento",
    type: "graduation"
  },
  {
    title: "Google Data Analytics Professional Certificate", 
    institution: "Coursera / Google",
    status: "Em andamento",
    type: "certification"
  },
  {
    title: "Análise de Dados e Inteligência de Negócios",
    institution: "UniGran",
    status: "Concluído",
    type: "certification"
  },
  {
    title: "Harvard Business for All",
    institution: "Harvard Business School (Patrocinado pelo Santander)",
    status: "Concluído",
    type: "certification"
  },
  {
    title: "Power BI Completo",
    institution: "FM2S",
    status: "Concluído", 
    type: "certification"
  }
];

export const Education = () => {
  return (
    <QuestLog title="FORMAÇÃO & CERTIFICAÇÕES" id="formacao">
      <div className="space-y-4">
        {educationItems.map((item, idx) => (
          <RpgWindow key={idx} className="flex justify-between items-start">
            <div className="flex-grow">
              <h3 className="text-quest-blue font-pixel text-xs mb-2 uppercase">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs mb-1">
                {item.institution}
              </p>
            </div>
            <div className="ml-4">
              <span className={`px-3 py-1 text-xs border-2 ${
                item.status.includes('andamento') 
                  ? 'bg-magic-green border-magic-green text-foreground' 
                  : 'bg-primary border-primary text-primary-foreground'
              }`}>
                {item.status}
              </span>
            </div>
          </RpgWindow>
        ))}
      </div>
    </QuestLog>
  );
};