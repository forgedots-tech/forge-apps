import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  text: string;
  dotColor?: string;
  pingColor?: string;
  className?: string;
}

export function StatusBadge({
  text,
  dotColor = "bg-primary",
  pingColor = "bg-primary/50",
  className,
}: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "px-3 py-1 border flex items-center gap-2 bg-card rounded-full backdrop-blur-sm",
        className,
      )}
    >
      <span className="relative h-2 w-2 flex">
        <span
          className={cn(
            "absolute h-full w-full inline-flex rounded-full animate-ping opacity-75",
            pingColor,
          )}
        />
        <span
          className={cn("relative h-2 w-2 inline-flex rounded-full", dotColor)}
        />
      </span>
      <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}
