import Navbar from "./components/navbar/Navbar";
import Hero from "./section/hero/hero";
import FeaturedProject from "./section/featured-project/FeaturedProject";
import About from "./section/about/About";
import Skills from "./section/skills/Skills";
import Contact from "./section/contact/Contact";
import Footer from "./section/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProject />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;