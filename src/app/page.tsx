import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Background Canvas */}
      <ScrollyCanvas />

      {/* Hero Scroll Zone Spacer for Overlay */}
      <div className="relative h-[250vh] w-full">
        <Overlay />
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
