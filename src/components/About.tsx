import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from '../styles/About.module.scss';
import { FaCode, FaPalette, FaServer } from 'react-icons/fa';

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  return (
    <div className='about-section'>
      <motion.section
        id="About"
        className={styles.about}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className={styles.container}>
          {/* Image Column */}


          {/* Content Column */}
          <motion.div
            className={styles.contentColumn}
            variants={itemVariants}
          >
            <motion.h2 variants={itemVariants}>
              About <span>Me</span>
            </motion.h2>

            <motion.p className={styles.subtitle} variants={itemVariants}>
              Passionate developer creating digital experiences
            </motion.p>

            <motion.p variants={itemVariants}>
              Hi, I&apos;m Avinash, a Computer Science student passionate about full-stack development. I specialize in building responsive, user-friendly web applications using modern technologies like <strong>React, Node.js, SQL, and Next.js</strong>. I enjoy bridging design and technology to create impactful digital solutions that solve real-world problems.

              Currently, I&apos;m actively seeking internship opportunities where I can contribute, learn from real-world challenges, and grow as a developer.
            </motion.p>

            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <FaCode className={styles.skillIcon} />
                <div>
                  <h4>Frontend</h4>
                  <p>React, Next.js, TypeScript, React Native</p>
                </div>
              </div>

              <div className={styles.skillItem}>
                <FaServer className={styles.skillIcon} />
                <div>
                  <h4>Backend</h4>
                  <p>Node.js, Express, MongoDB</p>
                </div>
              </div>

              <div className={styles.skillItem}>
                <FaPalette className={styles.skillIcon} />
                <div>
                  <h4>Design</h4>
                  <p>Figma, UI/UX Principles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutSection;