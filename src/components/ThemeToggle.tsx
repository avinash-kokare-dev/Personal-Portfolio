'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import styles from '../styles/ThemeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      initial={false}
      animate={{
        backgroundColor: theme === 'light' ? '#f8f9fa' : '#212529',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={styles.handle}
        layout
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {theme === 'light' ? (
          <FiSun className={styles.icon} />
        ) : (
          <FiMoon className={styles.icon} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;