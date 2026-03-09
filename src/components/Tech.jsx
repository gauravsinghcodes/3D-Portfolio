import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Media query to detect mobile screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Initial check
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className='mt-14'>
        {isMobile ? (
          <div className='flex flex-wrap justify-center gap-6'>
            {technologies.map((technology, index) => (
              <motion.div
                variants={fadeIn("up", "spring", index * 0.05, 0.75)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                key={technology.name}
                className='flex flex-col items-center group'
              >
                <div className='w-20 h-20 rounded-2xl bg-tertiary/40 backdrop-blur-md flex items-center justify-center border border-white/10 shadow-lg group-hover:border-[#915EFF]/50 transition-all duration-300 p-4 mb-2'>
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className='w-full h-full object-contain'
                  />
                </div>
                <p className='text-secondary text-[11px] text-center font-medium opacity-80'>
                  {technology.name}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className='w-full h-[600px]'>
            <BallCanvas technologies={technologies} />
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");