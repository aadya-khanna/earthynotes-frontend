import useLenis from "./hooks/useLenis";
import IntroCurtain from "./components/IntroCurtain";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import FirstBatch from "./components/FirstBatch";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  useLenis();
  return (
    <div className="bg-lace text-evergreen min-h-screen">
      <IntroCurtain />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <FirstBatch />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
