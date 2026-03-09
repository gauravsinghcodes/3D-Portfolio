import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  name,
  issuer,
  date,
  image,
  link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full'
    >
      <div
        className='relative w-full h-[230px] cursor-pointer'
        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={image}
          alt={`cert-${name}`}
          className='w-full h-full object-contain rounded-2xl bg-black-200'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[20px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{issuer}</p>
        <p className='mt-1 text-secondary text-[12px] italic'>{date}</p>
      </div>
    </Tilt>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "");