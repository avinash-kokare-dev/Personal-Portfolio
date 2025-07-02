import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from '../styles/ProjectCarousel.module.scss';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
    githubLink: "https://github.com/Avirekoka/Avi-mart",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode, animations, and project showcase.",
    githubLink: "https://github.com/Avirekoka/Personal-Portfolio",
    tags: ["Next.js", "Framer Motion", "SCSS"]
  },
  {
    id: 4,
    title: "Password Protected File Sharing App",
    description: "Password-protected file sharing app with user registration, login, upload, delete using Node.js, React, MongoDB.",
    githubLink: "https://github.com/Avirekoka/File-Sharing",
    tags: ["React", "Nodejs", "MongoDB"]
  },
];

export const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projects.length);

  return (
    <section id="Projects" className={styles.projects}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span>Projects</span>
      </motion.h2>

      <div className={styles.carouselContainer}>
        <button 
          className={styles.navButton} 
          onClick={prevSlide}
          aria-label="Previous projects"
        >
          <FaArrowLeft />
        </button>

        <div className={styles.carousel}>
          {visibleProjects.map((project) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h3>{project.title}</h3>
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              
              <Link
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                <FaGithub /> View on GitHub
              </Link>
            </motion.div>
          ))}
        </div>

        <button 
          className={styles.navButton} 
          onClick={nextSlide}
          aria-label="Next projects"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className={styles.dots}>
        {projects.slice(0, projects.length - 2).map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project set ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};