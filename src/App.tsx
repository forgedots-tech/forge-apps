import Topbar from "./components/layout/Topbar";
import Hero from "./components/layout/Hero";
import Features from "./components/layout/Features";
import Apps from "./components/layout/Apps";
import Footer from "./components/layout/Footer";
import { BackgroundOrbs } from "./components/animated/BackgroundOrbs";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundOrbs />
      <div className="relative z-10">
        <Topbar />
        <main>
          <Hero />
          <Features />
          <Apps />
        </main>
        <Footer />
      </div>
    </div>
  );
}
