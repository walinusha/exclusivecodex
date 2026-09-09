import type { LucideIcon } from "lucide-react";
import {
  Apple,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Cloud,
  Compass,
  Globe,
  Hotel,
  Layers,
  Monitor,
  Plug,
  Puzzle,
  Server,
  Shield,
  Smartphone,
  Tags,
  Workflow,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "saas-applications": Cloud,
  "cloud-applications": Server,
  "web-applications": Globe,
  "mobile-apps": Smartphone,
  "apple-apps": Apple,
  "desktop-apps": Monitor,
  "ai-applications": Bot,
  "ai-agents": Workflow,
  "data-analytics": BarChart3,
  "plugins-extensions": Puzzle,
  "api-integrations": Plug,
  "white-label": Tags,
  "vertical-software": Hotel,
  "internal-systems": Building2,
  "developer-tools": Boxes,
  cybersecurity: Shield,
  "cloud-devops": Layers,
  "it-consultancy": Compass,
};

export function Fit({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Fit ${value} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < value ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}
