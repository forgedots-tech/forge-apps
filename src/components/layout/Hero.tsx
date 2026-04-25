import { motion } from "framer-motion";
import { StatusBadge } from "../common/StatusBadge";
import { ArrowRight } from "lucide-react";
import { RevealHeading } from "../animated/RevealHeading";

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Hero() {
  const scrollToSection = (
    id: string,
    block: ScrollLogicalPosition = "start",
  ) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block,
    });
  };

  return (
    <section className="relative pt-42 pb-16 px-4 md:px-8 min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.div>
        <StatusBadge text="Enterprise Solutions" className="mb-5" />
      </motion.div>

      {/* Headlines */}
      <RevealHeading className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
        Built by <span className="text-primary">Forgedots</span> <br />
        for the future of <span className="italic font-light">work</span>
      </RevealHeading>

      <motion.p
        className="max-w-xl mt-3 text-base text-gray-600 md:text-lg"
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        A curated suite of intelligent applications designed to transform how
        enterprises operate, analyze, and automate.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        className="z-10 mt-5 flex flex-col items-center gap-4 sm:flex-row sm:gap-4"
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        <button
          onClick={() => scrollToSection("apps", "nearest")}
          className="px-6 py-3 flex items-center gap-2 text-sm font-semibold text-white bg-primary shadow-xl shadow-primary/25 rounded-full transition-all hover:opacity-90"
        >
          Explore Our Apps <ArrowRight size={20} />
        </button>
        <a
          href="https://forgedots.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-sm font-semibold text-foreground bg-white/50 border border-gray-200/50 shadow-sm rounded-full backdrop-blur-sm transition-all hover:bg-white"
        >
          Learn More
        </a>
      </motion.div>

      {/* Proof / Founders */}
      {/* <motion.div
        className="flex z-10 mt-8 items-center justify-center gap-3"
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="-space-x-3 flex">
          <div className="h-8 w-8 border-2 flex items-center justify-center bg-gray-200 border-white shadow-sm overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=33"
              alt="avatar 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-8 w-8 border-2 flex items-center justify-center bg-gray-300 border-white shadow-sm overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=47"
              alt="avatar 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-8 w-8 border-2 flex items-center justify-center bg-gray-400 border-white shadow-sm overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="avatar 3"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-600">
          Join 120 + SaaS & AI founders
        </p>
      </motion.div> */}
    </section>
  );
}
