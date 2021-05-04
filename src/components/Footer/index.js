import React from 'react';
import styles from './footer.module.scss';


const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.brand}>
      <div className={styles.created}>
        <span className="text-white">Copyright © InstaNFT.io 2021</span>
      </div>
    </div>
  </footer>
)

export default Footer;
