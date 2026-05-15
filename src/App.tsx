/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeScene from "./components/ThreeScene";
import CustomCursor from "./components/CustomCursor";
import ScientificOverlay from "./components/ScientificOverlay";

export default function App() {
  useEffect(() => {
    // Console Branding
    console.log(
      "%cROHIT SARKAR %c CORE_ONLINE",
      "color: #00F0FF; font-weight: bold; font-size: 20px;",
      "color: #FFF; font-weight: bold; font-size: 10px; background: #00F0FF20; padding: 2px 5px; border-radius: 4px;"
    );
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        {/* Background Systems */}
        <ThreeScene />
        <CustomCursor />
        <ScientificOverlay />
        <div className="grid-background" />
        <div className="noise-overlay" />
        
        {/* UI Layers */}
        <Navbar />
        
        <main>
          <Hero />
          
          <div className="relative z-10 space-y-0">
            <About />
            <Services />
            <Projects />
            <Features />
            <TechStack />
            <Testimonials />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}

