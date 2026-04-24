import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// Interface for Props
interface Props {
  children: React.ReactNode;
  className?: string;
}

// Animate heading
export function RevealHeading({ children, className }: Props) {
  // Global counter for word indices to ensure correct animation delay across nested elements
  let globalWordIndex = 0;

  const renderContent = (node: React.ReactNode): React.ReactNode => {
    if (typeof node === "string") {
      return node.split(/(\s+)/).map((part, _j) => {
        if (part.trim() === "") return part; // Preserve spaces as strings

        const delayIndex = globalWordIndex++;
        return (
          <motion.span
            key={`word-${delayIndex}`}
            className="inline-block"
            initial={{ y: 20, opacity: 0, filter: "blur(6px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: delayIndex * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            {part}
          </motion.span>
        );
      });
    }

    if (React.isValidElement(node)) {
      if (node.type === "br") {
        globalWordIndex++; // Increment index for line breaks to stagger lines
        return <br key={`br-${globalWordIndex}`} />;
      }

      const el = node as React.ReactElement<
        React.PropsWithChildren<{ className?: string }>
      >;
      const children = el.props.children;

      return React.cloneElement(
        el,
        {
          key: `el-${globalWordIndex++}`,
          // Ensure spans and other nested elements stay inline to avoid breaking text flow
          className: cn(el.props.className, "inline"),
        },
        React.Children.map(children, (child) => renderContent(child)),
      );
    }

    return node;
  };

  return (
    <h1
      className={cn(
        "text-[42px] font-medium leading-[1.1] md:text-[64px]",
        className,
      )}
    >
      {React.Children.map(children, (child) => renderContent(child))}
    </h1>
  );
}
