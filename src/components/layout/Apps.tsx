import { motion } from "framer-motion";
import { AppCard } from "../common/AppCard";

interface AppData {
  id: string;
  name: string;
  category: string;
  description: string;
  logo: string;
  version: string;
  url: string;
}

const APPS_DATA: AppData[] = [
  {
    id: "contract-analytics",
    name: "Contract Analytics",
    category: "AI Contract Intelligence",
    description:
      "Contract Analytics is a platform to manage contracts and bids with automated document analysis, structured workflows, and intelligent term extraction, enabling teams to reduce manual effort, ensure compliance, and make faster data-driven decisions.",
    logo: "📈",
    version: "v1.0",
    url: "https://contractanalytics.azurewebsites.net/",
  },
  {
    id: "agent-marketplace",
    name: "Agent Marketplace",
    category: "AI Agent Builder",
    description:
      "Agent Marketplace is a platform to create, customize, and manage AI agents for various use cases, enabling users to automate tasks, workflows, and interactions through configurable intelligence.",
    logo: "🤖",
    version: "v1.0",
    url: "https://proud-desert-083577f00.6.azurestaticapps.net/",
  },
  {
    id: "doc-extraction",
    name: "Document Extraction",
    category: "AI Document Intelligence",
    description:
      "Doc Extraction is a platform to extract key clauses from documents using predefined templates, enabling users to automate the identification and structuring of important information from complex files with improved accuracy and efficiency.",
    logo: "📄",
    version: "v1.0",
    url: "https://blue-field-09c556b1e.2.azurestaticapps.net",
  },
];

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Apps() {
  return (
    <section id="apps" className="relative px-5 pt-6 pb-12 md:px-20">
      <motion.div
        className="mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={FADE_UP_VARIANTS}
        transition={{ duration: 0.4, delay: 0.2, ease: "easeInOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="mb-3 text-xl font-semibold tracking-tight md:text-2xl text-center">
          Our Suite of <span className="text-primary">Products</span>
        </h2>
        <p className="mb-10 max-w-md text-base text-center text-gray-600">
          Discover our specialized AI-powered tools designed to transform your
          business workflows.
        </p>

        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {APPS_DATA.map((app) => (
            <AppCard
              key={app.id}
              name={app.name}
              category={app.category}
              description={app.description}
              logo={app.logo}
              version={app.version}
              url={app.url}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
