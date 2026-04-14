import { StatusBadge } from "@/components/common/StatusBadge";
// import { IconBadge } from "../common/IconBadge";
// import { AppWindowIcon } from "lucide-react";

export default function Topbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl px-5 py-4 border md:w-[70%] md:px-5 flex items-center justify-between bg-white/20 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.2)] rounded-2xl backdrop-blur-lg">
      <div className="flex items-center gap-2">
        {/* <IconBadge
          icon={AppWindowIcon}
          iconClassName="text-primary"
          className="bg-muted border-2 border-white shadow-xl"
        /> */}
        <div className="-space-y-1">
          <h1 className="text-lg font-semibold">Forge-Apps</h1>
          <p className="text-xs font-medium text-muted-foreground">
            AI Solutions
          </p>
        </div>
      </div>

      <StatusBadge
        text="All systems live"
        dotColor="bg-green-600"
        pingColor="bg-green-400"
      />
    </nav>
  );
}
