interface AppCardProps {
  name: string;
  category: string;
  description: string;
  logo: string;
  url: string;
}

export function AppCard({ name, category, description, logo, url }: AppCardProps) {
  return (
    <div className="relative p-8 flex flex-col items-center text-center bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1">
      {/* Category Badge */}
      <span className="mb-4 px-3 py-1 text-[10px] font-bold tracking-widest text-[#1A1A1A] uppercase bg-gray-50 rounded-full border border-gray-100">
        {category}
      </span>

      {/* Logo/Emoji Container */}
      <div className="mb-6 h-16 w-16 flex items-center justify-center text-3xl bg-[#1A1A1A] shadow-lg rounded-full">
        {logo}
      </div>

      {/* Content */}
      <h3 className="mb-3 text-xl font-bold text-gray-900 tracking-tight">
        {name}
      </h3>
      <p className="mb-8 text-sm leading-relaxed text-gray-500 line-clamp-4">
        {description}
      </p>

      {/* Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full py-3 text-sm font-semibold text-white bg-[#1A1A1A] rounded-2xl transition-all hover:bg-black hover:scale-[1.02]"
      >
        Visit Application
      </a>
    </div>
  );
}
