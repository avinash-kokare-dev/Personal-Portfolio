import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import styles from '../styles/HeroSection.module.scss';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
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
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Avirekoka',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/avinash-k-651649372/',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:avknash114@gmail.com',
    },
  ];

  const handleDownload = () => {
    // const resumeUrl = '/Avinash-Kokare.pdf';
    // const link = document.createElement('a');
    // link.href = resumeUrl;
    // link.download = 'Avinash-Kokare.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    console.log("Hello...")
  };

  return (
    <motion.section
      className={styles.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.gradientBg} />

      <div className={styles.content}>
        <div>
          <motion.div className={styles.textContainer} variants={itemVariants}>
            <motion.p className={styles.greeting} variants={itemVariants}>
              Hello, I&apos;m
            </motion.p>

            <motion.h1 className={styles.name} variants={itemVariants}>
              <span>AVINASH</span>
            </motion.h1>

            <motion.div className={styles.animatedText} variants={itemVariants}>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  1500,
                  'Backend Developer',
                  1500,
                  'UI/UX Designer',
                  1500,
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                className={styles.typeAnimation}
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.ctaContainer} variants={itemVariants}>
            <motion.button
              className={styles.primaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={'https://github.com/Avirekoka'}>View My Work</Link>
            </motion.button>
            <motion.button
              className={styles.secondaryBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={'#Contact'}>Contact Me</Link>
            </motion.button>
            <motion.button
              className={styles.downloadButton}
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <FaDownload className={styles.icon} />
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* Image (Right Side) */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          <div className={styles.decorativeShape} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;