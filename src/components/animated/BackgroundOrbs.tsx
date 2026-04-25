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
        className="absolute inset-0 opacity-[0.04]"
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
        className="absolute -top-20 -left-20 size-[300px] rounded-full border border-foreground/10 md:-top-32 md:-left-40 md:size-[520px]"
      >
        <div className="absolute inset-8 rounded-full border border-indigo/15 md:inset-12" />
        <div className="absolute inset-20 rounded-full border border-foreground/5 md:inset-28" />
      </motion.div>

      {/* Rotated square — top right */}
      <motion.div
        style={{ y: y2, rotate: useTransform(scrollY, [0, 1500], [12, -20]) }}
        className="absolute top-[10%] -right-20 size-[240px] border border-gold/25 md:top-[12%] md:-right-32 md:size-[420px]"
      >
        <div className="absolute inset-6 border border-gold/15 md:inset-10" />
      </motion.div>

      {/* Triangle — bottom left */}
      <motion.svg
        style={{ y: y3, rotate: useTransform(scrollY, [0, 1500], [0, -90]) }}
        className="absolute bottom-[8%] -left-6 size-[180px] opacity-30 md:bottom-[10%] md:-left-10 md:size-[250px]"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon
          points="100,15 190,180 10,180"
          stroke="hsl(var(--indigo) / 0.6)"
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
        className="absolute top-[40%] right-[5%] grid grid-cols-6 gap-2 opacity-40 md:top-[45%] md:right-[8%] md:gap-3"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="size-0.5 rounded-full bg-foreground/40 md:size-1"
          />
        ))}
      </motion.div>

      {/* Soft single glow — center, very subtle */}
      <div className="absolute left-1/2 top-1/3 size-[400px] -translate-x-1/2 rounded-full opacity-40 blur-3xl md:size-[700px]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--indigo)/0.18),transparent_65%)]" />
      </div>

      {/* Gold accent line — diagonal */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] left-[10%] h-px w-[150px] origin-left rotate-[25deg] bg-gradient-to-r from-transparent via-gold/40 to-transparent md:left-[15%] md:w-[280px]"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[20%] right-[15%] h-px w-[120px] origin-left -rotate-[15deg] bg-gradient-to-r from-transparent via-indigo/40 to-transparent md:bottom-[25%] md:right-[20%] md:w-[220px]"
      />

      {/* Small floating ring — bottom right */}
      <motion.div
        style={{ y: y3, rotate: useTransform(scrollY, [0, 1500], [0, -30]) }}
        className="absolute bottom-[12%] right-[5%] size-[100px] rounded-full border-2 border-foreground/8 md:bottom-[15%] md:right-[10%] md:size-[180px]"
      >
        <div className="absolute inset-3 rounded-full border border-gold/20 md:inset-4" />
      </motion.div>
    </div>
  );
}
