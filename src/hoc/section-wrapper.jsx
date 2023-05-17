import React from "react";
import { styles } from "@/style";
// import { motion } from "framer-motion";
// import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section
        // variants={staggerContainer()}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
