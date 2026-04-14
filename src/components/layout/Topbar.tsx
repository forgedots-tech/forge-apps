import logo from "../../assets/logo.png";
import { StatusBadge } from "@/components/common/StatusBadge";

export default function Topbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl px-5 py-4 border md:w-[70%] md:px-5 flex items-center justify-between bg-white/20 shadow-[0_4px_40px_-10px_rgba(0,0,0,0.2)] rounded-2xl backdrop-blur-lg">
      <div className="flex items-center gap-2">
        {/* <img src={logo} alt="logo" className="w-40" /> */}
        <div className="-space-y-1">
          <h1 className="text-lg font-semibold">FORGE-Apps</h1>
          <p className="text-xs font-medium text-gray-700">AI Solutions</p>
        </div>
      </div>

      <StatusBadge text="All systems live" />
    </nav>
  );
}
