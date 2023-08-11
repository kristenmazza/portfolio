import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [navResize, setNavResize] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavResize(true) : setNavResize(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <>
      <header>
        <nav
          className={`${styles.navbar} ${
            navResize ? styles.activeHeaderResize : ''
          }`}
        >
          <div className={styles.navbarContainer}>
            <div className={styles.logo}>
              <a href='#'>KM</a>
            </div>
            <ul className={styles.navbarList}>
              <li>
                <a href='#about'>About</a>
              </li>
              <li className={styles.projects}>
                <a href='#projects'>Projects</a>
              </li>
              <li className={styles.contact}>
                <a href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
