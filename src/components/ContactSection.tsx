import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/ContactSection.module.scss';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [form, setForm] = useState({ name: '', email: '', message: '', subject: '' });
  const [loading, setLoading] = useState(false);



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, type: 'spring' }
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast.success('📩 We’ve received your email. Thank you for reaching out!', {
          style: {
            border: '1px solid #4ade80',
            padding: '16px',
            color: '#064e3b',
            backgroundColor: '#ecfdf5',
            fontSize: '15px',
            fontWeight: '500',
          },
        });
        setForm({ name: '', email: '', message: '', subject: '' });
        setLoading(false);
      } else {
        toast.error('Failed to send message.');
        setLoading(false);
      }
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong.');
      setLoading(false);
    }
  };

  return (
    <div className='contact-section'>
      <motion.section
        id="Contact"
        className={styles.contact}
        initial="hidden"
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className={styles.container}>
          {/* Header */}
          <motion.div className={styles.header} variants={itemVariants}>
            <h2>Get In Touch</h2>
            <div className={styles.divider} />
            <p>Have a project in mind or want to collaborate? Let&apos;s talk!</p>
          </motion.div>

          <div className={styles.content}>
            {/* Contact Info */}
            <motion.div className={styles.info} variants={itemVariants}>
              <motion.div
                className={styles.infoCard}
                whileHover={{ y: -5 }}
              >
                <div className={styles.icon}>
                  <FaMapMarkerAlt />
                </div>
                <h3>Location</h3>
                <p>Satara, Maharashtra, India</p>
              </motion.div>

              <motion.div
                className={styles.infoCard}
                whileHover={{ y: -5 }}
              >
                <div className={styles.icon}>
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <a href="mailto:avknash114@gmail.com">avknash114@gmail.com</a>
              </motion.div>

              <motion.div
                className={styles.infoCard}
                whileHover={{ y: -5 }}
              >
                <div className={styles.icon}>
                  <FaPhone />
                </div>
                <h3>Phone</h3>
                <a href="tel:+1234567890">+91-9892418845</a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              className={styles.form}
              variants={formVariants}
              onSubmit={(e) => handleSubmit(e)}
            >
              <motion.div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => handleChange(e)}
                  name='name'
                />
              </motion.div>

              <motion.div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  onChange={handleChange}
                  value={form.email}
                  name='email'
                />
              </motion.div>

              <motion.div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={form.subject}
                  name='subject'
                />
              </motion.div>

              <motion.div className={styles.formGroup}>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  onChange={handleChange}
                  value={form.message}
                  name='message'
                />
              </motion.div>

              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className={styles.loader}></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactSection;