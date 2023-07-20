import About from "@/components/About";
import LandingPage from "@/components/Landing";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-bg-light">
      <div id="container" className="w-full">
        <LandingPage />
        <About />
      </div>
    </main>
  );
}
