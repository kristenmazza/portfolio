import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [navStyle, setNavStyle] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavStyle(true) : setNavStyle(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.logo}>
            <img src='/images/km-logo.svg' />
          </div>
          <ul className={styles.navbarList}>
            <li>
              <a href='#'>About</a>
            </li>
            <li className={styles.projects}>
              <a href='#'>Projects</a>
            </li>
            <li className={styles.contact}>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`${styles.border} ${navStyle ? styles.active : ''}`}
      ></div>
    </>
  );
}
