import { RpgWindow } from "./RpgWindow";

const skillCategories = [
  {
    title: "Análise & Visualização",
    skills: ["Power BI", "Excel Avançado", "Google Sheets", "Tableau"],
    color: "magic-green"
  },
  {
    title: "Linguagens & Bancos de Dados", 
    skills: ["SQL (PostgreSQL)", "Python", "R", "AWS"],
    color: "quest-blue"
  },
  {
    title: "Metodologias & Conceitos",
    skills: ["ETL", "Modelagem de Dados", "IA Aplicada", "Análise Descritiva/Inferencial"],
    color: "item-bronze"
  }
];

export const SkillTree = () => {
  return (
    <QuestLog title="HABILIDADES TÉCNICAS" id="habilidades">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <RpgWindow key={idx} className="text-center">
            <h3 className={`text-${category.color} font-pixel text-xs mb-4 uppercase`}>
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="bg-muted text-muted-foreground px-3 py-2 border border-border text-xs">
                  {skill}
                </div>
              ))}
            </div>
          </RpgWindow>
        ))}
      </div>
    </QuestLog>
  );
};

// Import QuestLog
import { QuestLog } from "./QuestLog";