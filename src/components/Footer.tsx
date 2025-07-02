'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
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

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/">Avinash</Link>
            <p>Creating digital experiences that matter</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linksColumn}>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#About">About</Link></li>
                <li><Link href="#Projects">Projects</Link></li>
                <li><Link href="#Contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
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

          <div className={styles.copyright}>
            &copy; {currentYear} Avinash. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;