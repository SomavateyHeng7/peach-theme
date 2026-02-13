import ThreeDShowcase from './ThreeDShowcase';
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import NavBar from "./components/Navbar";
import Background from "./components/Background";

const App = () => (
  <>
  <div className="min-h-screen bg-white dark:bg-gray-900"></div>
    <Background/>
    <NavBar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <ThreeDShowcase />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
