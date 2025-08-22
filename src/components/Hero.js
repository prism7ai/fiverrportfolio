import React from "react";
import { motion } from "framer-motion";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm <span>Priyaranjan</span></h1>
        <p>Freelance Web Developer & Designer</p>
        <motion.a
          href="#contact"
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Hire Me
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;
