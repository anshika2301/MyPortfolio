import React from "react";
import Navbar from "./components/Navbar";
import CloudBG from "./components/CloudBG";
import Hero from "./components/Hero";       // UNCHANGED
import About from "./components/About";
import Projects from "./components/Projects"; // NEW/kept
import Contact from "./components/Contact"; // UNCHANGED
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative min-h-screen text-slate-900">
      <CloudBG />
      <Navbar />

      <main className="relative z-10">
        <Hero />      {/* kept exactly as before */}
        <About />
        <Projects />  {/* projects section (cards) */}
        {/* <Skills /> removed */}
        <Contact />   {/* kept exactly as before */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
