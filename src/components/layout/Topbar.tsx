import { StatusBadge } from "@/components/common/StatusBadge";

export default function Topbar() {
  return (
    <nav className="fixed top-0 z-50 w-full p-5 border-b md:px-30 flex items-center justify-between bg-white/40 backdrop-blur-lg">
      <img
        src={
          "https://www.forgedots.com/wp-content/uploads/2024/04/dots-logo.png"
        }
        alt="Logo"
        className="w-52 relative z-50"
      />

      <StatusBadge text="All systems live" className="border-none" />
    </nav>
  );
}
