import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <motion.nav 
      className={styles.nav}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.logo}>Whitex Laundry</div>
      <ul className={styles.links}>
        <li><a href="#story">Our Story</a></li>
        <li><a href="#timeline">Legacy</a></li>
        <li><a href="#services">Services</a></li>
      </ul>
      <a href="tel:08763315590" className={styles.callBtn} aria-label="Call Now">
        <Phone size={18} />
        <span className={styles.callText}>Call Now</span>
      </a>
    </motion.nav>
  );
}
