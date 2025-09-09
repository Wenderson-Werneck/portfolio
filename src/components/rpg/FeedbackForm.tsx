import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RpgWindow } from "./RpgWindow";
import { QuestLog } from "./QuestLog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Feedback Enviado!",
      description: "Obrigado pelo seu feedback! Sua opinião é muito importante.",
    });
    setFormData({ name: '', email: '', feedback: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <QuestLog title="DEIXE SEU FEEDBACK" id="feedback">
      <RpgWindow variant="quest">
        <p className="text-center text-muted-foreground mb-6 text-xs">
          Ajude-me a melhorar meu portfólio! Deixe suas sugestões, críticas ou perguntas.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="text-xs font-pixel text-quest-blue mb-2 block uppercase">
              Nome
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="font-pixel text-xs"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-xs font-pixel text-quest-blue mb-2 block uppercase">
              Email (opcional)
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="font-pixel text-xs"
            />
          </div>
          
          <div>
            <label htmlFor="feedback" className="text-xs font-pixel text-quest-blue mb-2 block uppercase">
              Sugestão ou Feedback
            </label>
            <Textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              rows={4}
              className="font-pixel text-xs resize-none"
            />
          </div>
          
          <Button type="submit" variant="hero" size="lg" className="w-full">
            Enviar Feedback
          </Button>
        </form>
      </RpgWindow>
    </QuestLog>
  );
};