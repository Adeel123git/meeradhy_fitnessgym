import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import LoadingScreen from "./components/LoadingScreen";
import Membership from "./components/Membership";
import Contact from "./components/Contact";
import JoinNow from "./components/JoinNow";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      // Ye line double scroll ko hamesha ke liye block kar degi
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";

      // Refresh ScrollTrigger after loading
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [loading]);

  return (
    <Router>
      <div className="bg-black  w-full relative">
        {loading && <LoadingScreen onFinished={() => setLoading(false)} />}

        {/* Custom Cursor sirf loading ke baad aur desktop par */}
        {!loading && <CustomCursor />}

        <div
          className={`relative flex flex-col transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}
        >
          <Navbar />

          <main className="flex-grow w-full">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="w-full">
                    {/* ZAROORI: Hero ko loading state pass karni hai */}
                    <Hero loading={loading} />
                    <About />
                    <Programs />
                    <Membership />
                    <Contact />
                  </div>
                }
              />
              <Route
                path="/about"
                element={
                  <div className="pt-24">
                    <About />
                  </div>
                }
              />
              <Route
                path="/programs"
                element={
                  <div className="pt-24">
                    <Programs />
                  </div>
                }
              />
              <Route
                path="/membership"
                element={
                  <div className="pt-24">
                    <Membership />
                  </div>
                }
              />
              <Route
                path="/contact"
                element={
                  <div className="pt-24">
                    <Contact />
                  </div>
                }
              />
              <Route
                path="/join-now"
                element={
                  <div className="pt-24">
                    <JoinNow />
                  </div>
                }
              />
            </Routes>
          </main>

          <footer className="relative z-20 w-full bg-black">
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
