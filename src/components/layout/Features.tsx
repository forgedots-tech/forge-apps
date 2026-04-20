import { Brain, Flame, Users } from "lucide-react";
import { FeatureCard } from "@/components/common/FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-4 py-16 md:px-8 flex flex-col items-center justify-center gap-10"
    >
      <div className="w-full max-w-5xl grid gap-8 md:gap-3 md:grid-cols-3">
        <FeatureCard
          Icon={Brain}
          title="AI-Powered Solutions"
          description={
            <>
              Intelligent automation and decision-making driven by cutting-edge
              artificial intelligence.
            </>
          }
        />
        <FeatureCard
          Icon={Flame}
          title="AI Insights"
          description={
            <>
              Built for scale with lightning-fast processing and 99.9% uptime
              reliability.
            </>
          }
        />
        <FeatureCard
          Icon={Users}
          title="Team Collaboration"
          description={
            <>
              Enterprise-grade security with full regulatory compliance and data
              protection.
            </>
          }
        />
      </div>
    </section>
  );
}
