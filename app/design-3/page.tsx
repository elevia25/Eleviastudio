import LogoIntroLoader from "../../components/ui/LogoIntroLoader";
import Navbar from "../../components/ui/Navbar";
import Hero from "../../components/ui/Hero";
import Footer from "../../components/ui/Footer";
import About from "../../components/ui/About";
import Services from "../../components/ui/Services";
import Work from "../../components/ui/Work";
import Testimonials from "../../components/ui/Testimonials";
import Process from "../../components/ui/Process";
import CTA from "../../components/ui/CTA";
import Marquee from "../../components/ui/Marquee";

export default function Home() {
  return (
    <LogoIntroLoader>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <CTA />
      </main>
      <Footer />
    </LogoIntroLoader>
  );
}
