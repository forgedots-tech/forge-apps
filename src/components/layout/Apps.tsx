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
    <section id="apps" className="px-4 py-16 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl text-center">
          Our Suite of Products
        </h2>
        <p className="mb-10 max-w-md text-base text-center text-gray-600">
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
