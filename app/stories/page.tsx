import Hero from "../../components/main/Hero";
import Work from "../../components/main/Work";
import Footer from "../../components/main/Footer";
import Approach from "../../components/main/Approach";
import ArcThread from "../../components/main/ArcThread";
import Contact from "../../components/main/Contact";
import GrainOverlay from "../../components/main/GrainOverlay";
import Nav from "../../components/main/Nav";
import Preloader from "../../components/main/Preloader";
import Stats from "../../components/main/Stats";
import Testimonial from "../../components/main/Testimonial";
import Marquee from "../../components/main/Marquee";


export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Preloader />
      <Nav />

      <main id="top" className="relative">
        <div id="main-content" className="relative">
          <ArcThread />
          <Hero />
          <Marquee />
          <Stats />
          <Work />
          <Approach />
          <Testimonial />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
