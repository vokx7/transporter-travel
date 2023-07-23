import About from "@/components/About";
import Contact from "@/components/Contact";
import LandingPage from "@/components/Landing";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-bg-light">
      <div id="container" className="w-full">
        <LandingPage />
        <About />
        <Offer />
        <Contact />
      </div>
    </main>
  );
}
