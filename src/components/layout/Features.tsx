import { Brain, Flame, Users } from "lucide-react";
import { FeatureCard } from "@/components/common/FeatureCard";

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-4 md:px-8 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-4xl grid gap-8 md:gap-3 md:grid-cols-3">
        <FeatureCard
          Icon={Brain}
          title="Smart Automation"
          description={
            <>
              Automate everyday
              <br /> work fast
            </>
          }
        />
        <FeatureCard
          Icon={Flame}
          title="AI Insights"
          description={
            <>
              Unlock data-driven
              <br /> sharp clarity
            </>
          }
        />
        <FeatureCard
          Icon={Users}
          title="Team Collaboration"
          description={
            <>
              Boost smart workflows
              <br /> with AI
            </>
          }
        />
      </div>
    </section>
  );
}
