import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sustainalysis from "@/components/Sustainalysis";
import Reference from "@/components/Reference";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Sustainalysis />
      <Reference />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
