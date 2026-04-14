import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/common/IconBadge";

export interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: ReactNode;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  // const x = useMotionValue(0);
  // const y = useMotionValue(0);

  // const mouseXSpring = useSpring(x);
  // const mouseYSpring = useSpring(y);

  // const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  // const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   const width = rect.width;
  //   const height = rect.height;
  //   const mouseX = e.clientX - rect.left;
  //   const mouseY = e.clientY - rect.top;

  //   const xPct = mouseX / width - 0.5;
  //   const yPct = mouseY / height - 0.5;

  //   x.set(xPct);
  //   y.set(yPct);
  // };

  // const handleMouseLeave = () => {
  //   x.set(0);
  //   y.set(0);
  // };

  return (
    <motion.div
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
      // style={{
      //   rotateX,
      //   rotateY,
      //   transformStyle: "preserve-3d",
      // }}
      className="relative p-8 pt-10 flex flex-col items-center gap-2 text-center bg-white shadow-[0_4px_40px_-10px_rgba(0,0,0,0.05)] rounded-3xl transition-shadow duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]"
    >
      <div
        // style={{ transform: "translateZ(50px)" }}
        className="absolute -top-5"
      >
        <IconBadge icon={Icon} />
      </div>

      <h3
        // style={{ transform: "translateZ(30px)" }}
        className="text-lg font-medium tracking-tight"
      >
        {title}
      </h3>
      <p
        // style={{ transform: "translateZ(20px)" }}
        className="text-sm text-gray-600"
      >
        {description}
      </p>
    </motion.div>
  );
}
