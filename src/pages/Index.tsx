import { HeroStatus } from "@/components/rpg/HeroStatus";
import { QuestLog } from "@/components/rpg/QuestLog";
import { SkillTree } from "@/components/rpg/SkillTree";
import { ProjectCards } from "@/components/rpg/ProjectCards";
import { Education } from "@/components/rpg/Education";
import { FeedbackForm } from "@/components/rpg/FeedbackForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Character Status */}
      <HeroStatus />
      
      {/* About Section */}
      <QuestLog title="SOBRE MIM" id="sobre">
        <p className="text-sm leading-relaxed text-center max-w-3xl mx-auto">
          Profissional em transição para a área de Dados, trazendo uma mentalidade analítica e 
          investigativa desenvolvida na resolução de problemas operacionais. Minha experiência 
          prática em diagnósticos me permite não apenas extrair dados, mas compreendê-los para 
          traduzir desafios de negócio em soluções funcionais.
        </p>
      </QuestLog>
      
      {/* Skills Section */}
      <SkillTree />
      
      {/* Projects Section */}
      <ProjectCards />
      
      {/* Education Section */}
      <Education />
      
      {/* Feedback Section */}
      <FeedbackForm />
    </div>
  );
};

export default Index;
