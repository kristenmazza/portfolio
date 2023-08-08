import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About</h2>
        <p>
          I am a software engineer who embraces a user-first design philosophy.
          My expertise revolves around creating responsive layouts using the
          JavaScript stack, with a focus on React and NodeJS. Drawing from my
          background as a speech-language pathologist, I excel in devising
          solutions to intricate problems and possess effective communication
          and collaboration skills for seamless teamwork and understanding of
          end-users&apos; needs. My toolkit primarily includes the following
          technologies but is always expanding:
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
