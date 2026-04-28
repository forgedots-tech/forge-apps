import { motion } from "framer-motion";
import { Brain, Flame, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/common/FeatureCard";

interface FeatureData {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const FEATURES: FeatureData[] = [
  {
    id: "ai-solutions",
    icon: "Brain",
    title: "AI-Powered Solutions",
    description:
      "Intelligent automation and decision-making driven by cutting-edge artificial intelligence.",
  },
  {
    id: "enterprise-performance",
    icon: "Flame",
    title: "Enterprise Performance",
    description:
      "Built for scale with lightning-fast processing and 99.9% uptime reliability.",
  },
  {
    id: "secure-compliant",
    icon: "ShieldCheck",
    title: "Secure & Compliant",
    description:
      "Enterprise-grade security with full regulatory compliance and data protection.",
  },
];

const iconMap: Record<string, any> = {
  Brain: Brain,
  Flame: Flame,
  ShieldCheck: ShieldCheck,
};

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-5 py-16 md:px-8 flex flex-col items-center justify-center"
    >
      <motion.div
        className="w-full max-w-5xl grid gap-8 md:gap-3 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        {FEATURES.map((feature) => {
          const Icon = iconMap[feature.icon] || Brain;
          return (
            <FeatureCard
              key={feature.id}
              Icon={Icon}
              title={feature.title}
              description={<>{feature.description}</>}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
