import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Marquee from "./components/Marquee";
import SneakPeak from "./components/SneakPeak";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <section className="bg-[#9ddcf9]">
        <Header />
        <Hero />
      </section>
      <Marquee />
      <About />
      <Highlights />
      <SneakPeak />
      <Sponsors />
      <Faq />
      <Marquee />
      <Contact />
    </>
  );
}

export default App;
