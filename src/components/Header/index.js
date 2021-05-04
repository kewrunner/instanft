import React from 'react';
import styles from './header.module.scss';
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";


const Header = () => (
    <div className={styles.header}>

        <nav id="menu" className="menu">
          <a href="/" id="logo" className={styles.link}>
              InstaNFT.io
          </a>
          <ul>
            <li><a href="/" className={styles.link}> Home</a></li>

            <li><a href="#" className={styles.link}> Ethereum</a></li>

            <li><a href="#" className={styles.link}> Blockchain</a></li>

            <li><a href="#" className={styles.link}> NFT </a></li>

          </ul>
        </nav>
    </div>
)

export default Header;
