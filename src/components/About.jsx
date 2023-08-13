import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About</h2>

        <p>
          Shifting gears from diagnosing communication disorders to debugging
          code, I&#39;m rewriting my career story in an exciting transition from
          speech-language pathologist to software engineer. My decision to
          transition into software engineering stems from a strong desire to
          transform ideas into functional web applications and programs that
          improve efficiency, accessibility, and the overall user experience.
        </p>
        <p>
          While working as a speech-language pathologist, I developed strong
          analytical and problem-solving skills, honed my ability to communicate
          effectively, and gained a deep appreciation for the impact of
          technology on communication difficulties. Since the pandemic, I found
          myself relying heavily on digital therapy materials and even created
          some of my own to use with clients. In the process of creating these
          materials, I encountered challenges that could not be solved without
          knowing how to program. This led me to start learning to develop web
          applications and sparked my interest in pivoting to a career in
          software engineering. I am eager to use my skills as a software
          engineer to solve meaningful problems and make a positive impact on
          people&#39;s lives.
        </p>
        <p>
          My toolkit primarily includes the following technologies but is always
          expanding:
        </p>
        <div className={styles.skills}>
          <div className={styles.skillsContainer}>
            <div className={styles.skillsHeading}>
              <h3>Frontend</h3>
              <div className={styles.divider}>
                <span></span>
              </div>
            </div>
            <div className={styles.skillsGroup}>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' />
                <span>HTML</span>
              </div>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' />
                <span>CSS</span>
              </div>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
                <span>JavaScript</span>
              </div>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
                <span>React</span>
              </div>
            </div>
          </div>

          <div className={styles.skillsContainer}>
            <div className={styles.skillsHeading}>
              <h3>Tools</h3>
              <div className={styles.divider}>
                <span></span>
              </div>
            </div>
            <div className={styles.skillsGroup}>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' />
                <span>Git</span>
              </div>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' />
                <span>Jest</span>
              </div>
              <div className={styles.iconGroup}>
                <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg' />
                <span>Webpack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
