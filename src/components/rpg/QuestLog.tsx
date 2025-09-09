import { RpgWindow } from "./RpgWindow";
import { ReactNode } from "react";

interface QuestLogProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export const QuestLog = ({ title, children, id }: QuestLogProps) => {
  return (
    <section id={id} className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <RpgWindow title={title} className="text-sm leading-relaxed">
          {children}
        </RpgWindow>
      </div>
    </section>
  );
};