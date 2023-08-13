import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About</h2>

        <p>
          Shifting gears from diagnosing communication disorders to debugging
          code, I&#39;m rewriting my career story in a transition from
          speech-language pathologist to software engineer. My decision to
          transition into software engineering stems from a strong desire to
          transform ideas into functional web applications and programs that
          improve efficiency, accessibility, and the overall user experience.
        </p>
        <p>
          While working as a speech-language pathologist, I developed strong
          analytical and problem-solving skills, honed my ability to communicate
          effectively, and gained a deep appreciation for harnessing technology
          to address speech and language difficulties. Since the pandemic, I
          found myself relying heavily on digital therapy materials and even
          created some of my own to use with clients. In the process of creating
          these materials, I encountered challenges that could not be solved
          without knowing how to program. This led me to start learning to
          develop web applications and sparked my interest in pivoting to a
          career in software engineering. I am eager to use my skills as a
          software engineer to solve meaningful problems and make a positive
          impact on people&#39;s lives.
        </p>
        <p>
          My toolkit primarily includes the following technologies but is always
          expanding:
        </p>

        <div className={styles.skillsList}>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/html5-plain.svg' />
            <span>HTML</span>
          </div>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/css3-plain.svg' />
            <span>CSS</span>
          </div>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/javascript-plain.svg' />
            <span>JavaScript</span>
          </div>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/react-original.svg' />
            <span>React</span>
          </div>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/git-plain.svg' />
            <span>Git</span>
          </div>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/jest-plain.svg' />
            <span>Jest</span>
          </div>
          <div className={styles.iconGroup}>
            <img alt='' src='/images/icons/webpack-plain.svg' />
            <span>Webpack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
