import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconBadgeProps {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
}

export function IconBadge({
  icon: Icon,
  className,
  iconClassName,
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "h-10 w-10 flex items-center justify-center bg-primary shadow-lg rounded-full",
        className,
      )}
    >
      <Icon className={cn("h-4 w-4 text-white", iconClassName)} />
    </div>
  );
}
