import { StatusBadge } from "@/components/common/StatusBadge";

export default function Topbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full p-5 border-b md:px-20 flex items-center justify-between bg-white/50 backdrop-blur-lg">
      <div>
        <h1 className="text-base font-bold tracking-wide uppercase leading-tight">
          Forgedots
        </h1>
        <p className="text-xs font-medium text-muted-foreground">
          Technologies
        </p>
      </div>

      <StatusBadge
        text="All systems live"
        dotColor="bg-green-600"
        pingColor="bg-green-400"
        className="border-none"
      />
    </nav>
  );
}
