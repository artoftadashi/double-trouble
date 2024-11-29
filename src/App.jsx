import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Marquee from "./components/Marquee";
import SneakPeak from "./components/SneakPeak";

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
    </>
  );
}

export default App;
