import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import About from "../../components/About";
import Services from "../../components/Services";
import Work from "../../components/Work";
import Testimonials from "../../components/Testimonials";
import Process from "../../components/Process";
import CTA from "../../components/CTA";
import Marquee from "../../components/Marquee";


export default function Home() {
  return (
    <>
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
    </>
  );
}
