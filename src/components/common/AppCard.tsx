import { ArrowUpRight } from "lucide-react";

interface AppCardProps {
  name: string;
  category: string;
  description: string;
  logo: string;
  version: string;
  url: string;
}

export function AppCard({
  name,
  category,
  description,
  logo,
  version,
  url,
}: AppCardProps) {
  return (
    <div className="relative flex flex-col bg-[#f9f9f9] border-8 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      {/* Header Area */}
      <div className="flex items-center gap-3 p-8 pb-4">
        {/* Logo Container */}
        <div className="h-12 min-w-12 flex items-center justify-center text-xl text-white bg-[#1A1A1A] rounded-full shadow-xl">
          {logo}
        </div>

        {/* Title and Badge Info */}
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-base font-bold tracking-tight">
            {name}{" "}
            <span className="ml-1 text-xs font-medium text-muted-foreground">
              ({version})
            </span>
          </h3>
          <span className="px-2 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-full border">
            {category}
          </span>
        </div>
      </div>

      {/* Body Area */}
      <div className="px-8 pb-8">
        <p className="text-sm leading-normal text-gray-600 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer Area */}
      <div className="mt-auto flex items-center justify-between border-t border-gray-100 px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-muted-foreground">
            Live
          </span>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#1A1A1A] font-bold tracking-tight group transition-colors hover:text-black"
        >
          Open Application
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
