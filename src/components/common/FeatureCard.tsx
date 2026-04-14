import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/common/IconBadge";

export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: ReactNode;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative p-8 pt-9 flex flex-col items-center gap-2 text-center bg-white border-none shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] rounded-3xl">
      <IconBadge icon={Icon} className="absolute -top-5" />
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-sm leading-snug text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
