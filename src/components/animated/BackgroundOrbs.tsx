import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 120]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -180]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 80]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rot = useTransform(scrollY, [0, 1500], [0, 45]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Large outlined circle — top left */}
      <motion.div
        style={{ y: y1, rotate: rot }}
        className="absolute -top-32 -left-40 h-[520px] w-[520px] rounded-full border border-foreground/10"
      >
        <div className="absolute inset-12 rounded-full border border-indigo/15" />
        <div className="absolute inset-28 rounded-full border border-foreground/5" />
      </motion.div>

      {/* Rotated square — top right */}
      <motion.div
        style={{ y: y2, rotate: useTransform(scrollY, [0, 1500], [12, -20]) }}
        className="absolute top-[12%] -right-32 h-[420px] w-[420px] border border-gold/25"
      >
        <div className="absolute inset-10 border border-gold/15" />
      </motion.div>

      {/* Triangle — bottom left */}
      <motion.svg
        style={{ y: y3, rotate: useTransform(scrollY, [0, 1500], [0, -90]) }}
        className="absolute bottom-[10%] -left-10 h-[300px] w-[300px] opacity-30"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon
          points="100,15 190,180 10,180"
          stroke="hsl(var(--indigo) / 0.4)"
          strokeWidth="0.6"
          fill="none"
        />
        <polygon
          points="100,45 165,165 35,165"
          stroke="hsl(var(--indigo) / 0.4)"
          strokeWidth="0.5"
          fill="none"
        />
      </motion.svg>

      {/* Small accent dot cluster — middle right */}
      <motion.div
        style={{ y: y4 }}
        className="absolute top-[45%] right-[8%] grid grid-cols-6 gap-3 opacity-40"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="h-1 w-1 rounded-full bg-foreground/40" />
        ))}
      </motion.div>

      {/* Soft single glow — center, very subtle */}
      <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-40 blur-3xl">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--indigo)/0.18),transparent_65%)]" />
      </div>

      {/* Gold accent line — diagonal */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] left-[15%] h-px w-[280px] origin-left rotate-[25deg] bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[25%] right-[20%] h-px w-[220px] origin-left -rotate-[15deg] bg-gradient-to-r from-transparent via-indigo/40 to-transparent"
      />

      {/* Small floating ring — bottom right */}
      <motion.div
        style={{ y: y3, rotate: useTransform(scrollY, [0, 1500], [0, -30]) }}
        className="absolute bottom-[15%] right-[10%] h-[180px] w-[180px] rounded-full border-2 border-foreground/8"
      >
        <div className="absolute inset-4 rounded-full border border-gold/20" />
      </motion.div>
    </div>
  );
}
