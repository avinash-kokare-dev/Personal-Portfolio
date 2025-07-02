'use client'
import React from 'react';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', path: 'About' },
    { name: 'Projects', path: 'Projects' },
    { name: 'Contact', path: 'Contact' },
  ]

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`container ${styles.container}`}>
        <Link href="#Home" className={styles.logo}>
          Avinash
        </Link>
        {/* <ThemeToggle /> */}

        <div className={styles.desktopLinks}>
          {navItems.map((item) => (
            <Link key={item.name} href={`#${item.path}`} className={styles.navLink}>
              {item.name}
            </Link>
          ))}
        </div>

        <button 
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} />
        </button>
      </div>

      <motion.div 
        className={styles.mobileMenu}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={`#${item.path}`} 
            className={styles.mobileLink}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default Navbar