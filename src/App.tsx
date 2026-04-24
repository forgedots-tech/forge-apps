import Topbar from "./components/layout/Topbar";
import Hero from "./components/layout/Hero";
// import Features from "./components/layout/Features";
import Apps from "./components/layout/Apps";
import Footer from "./components/layout/Footer";
import { BackgroundOrbs } from "./components/animated/BackgroundOrbs";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <BackgroundOrbs />
      <Topbar />
      <main className="flex-1 relative z-10">
        <Hero />
        {/* <Features /> */}
        <Apps />
      </main>
      <Footer />
    </div>
  );
}
