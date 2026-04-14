import Topbar from "./components/layout/Topbar";
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import Apps from "./components/layout/Apps";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Topbar />
      <main className="flex flex-col gap-10">
        <Hero />
        <Features />
        <Apps />
      </main>
      <Footer />
    </div>
  );
}
