import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";
import { motion } from "framer-motion";


function Home() {
  return (
    <motion.div
    initial={{width: 0}} 
    animate={{width: "100%"}} 
    exit={{x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <HeroSection />
      <Cards />
      <Footer />
    </motion.div>
  );
}

export default Home;
