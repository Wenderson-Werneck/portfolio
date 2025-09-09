import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RpgWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
  variant?: 'default' | 'hero' | 'quest';
}

export const RpgWindow = ({ children, className, title, variant = 'default' }: RpgWindowProps) => {
  const windowStyles = {
    default: "rpg-window",
    hero: "hero-frame",
    quest: "rpg-window magic-animation"
  };

  return (
    <div className={cn(windowStyles[variant], "p-6 relative", className)}>
      {title && (
        <div className="quest-log-title mb-4 text-center">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};