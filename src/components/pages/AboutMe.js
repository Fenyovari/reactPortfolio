import React from "react";
import "../../App.css";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h1>Hi</h1>
    </motion.div>
  );
}
