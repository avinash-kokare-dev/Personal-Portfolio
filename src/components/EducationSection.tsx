import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import styles from '../styles/EducationSection.module.scss';

const educationData = [
    {
        id: 1,
        degree: "B.E Computer Science",
        institution: "Vidyalankar Institute Of Technology, Mumbai",
        score: "CGPA: 8.4",
        duration: "2022 - 2026",
        description: "Specialized in software development, algorithms, and database systems. Completed projects in web development.",
        highlights: [
            "Data Structures & Algorithms",
            "Web Development",
            "Database Systems",
        ],
        icon: <FaUniversity />
    },
    {
        id: 2,
        degree: "Higher Secondary (HSC)",
        score: "72.46%",
        duration: "2021 - 2022",
        description: "Science stream with focus on Physics, Chemistry, and Mathematics. Developed strong analytical skills.",
        highlights: [
            "Physics",
            "Chemistry",
            "Mathematics",
        ],
        icon: <FaGraduationCap />
    },
    {
        id: 3,
        degree: "Secondary School (SSC)",
        institution: "K.B.P.Vidyalaya, Vasai",
        score: "86.6%",
        duration: "2019 - 2020",
        description: "Completed with distinction in all subjects with special achievement in Mathematics.",
        highlights: [
            "All Core Subjects",
        ],
        icon: <FaSchool />
    }
];

export const EducationSection = () => {
    return (
        <section id="education" className={styles.education}>
            <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Education <span>Background</span>
            </motion.h2>

            <div className={styles.timeline}>
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        className={styles.timelineItem}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div className={styles.timelineDot}>
                            {edu.icon}
                        </div>

                        <motion.div
                            className={styles.educationCard}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.cardHeader}>
                                <h3>{edu.degree}</h3>
                                <div className={styles.scoreBadge}>{edu.score}</div>
                            </div>

                            <div className={styles.institution}>
                                {edu.institution} ({edu.duration})
                            </div>

                            <p className={styles.description}>{edu.description}</p>

                            <div className={styles.highlights}>
                                {edu.highlights.map((item, i) => (
                                    <span key={i} className={styles.highlightPill}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};