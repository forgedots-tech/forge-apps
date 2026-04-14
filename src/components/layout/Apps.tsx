import { useEffect, useState } from "react";
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

export default function Apps() {
  const [apps, setApps] = useState<AppData[]>([]);

  useEffect(() => {
    fetch("/data/apps.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error loading apps:", err));
  }, []);

  return (
    <section id="apps" className="px-4 py-24 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl text-center">
          Our Applications
        </h2>
        <p className="mb-16 max-w-lg text-base text-center text-gray-500">
          Discover our specialized AI-powered tools designed to transform your
          business workflows.
        </p>

        <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:max-w-4xl">
          {apps.map((app) => (
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
      </div>
    </section>
  );
}
