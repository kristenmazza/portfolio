import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About</h2>

        <p>
          Transitioning from diagnosing communication disorders to debugging
          code, I am a speech-language pathologist turned software engineer.
          With my professional training and background in speech-language
          pathology, I bring increased empathy, attention to detail, critical
          thinking, collaboration, and communication skills. I am passionate
          about making delightful, accessible user experiences for people to
          consume.
        </p>
        <p>
          My interest in software engineering was ignited during the pandemic,
          when speech therapy services moved online. I found myself relying
          heavily on the limited digital therapy materials available and began
          creating some of my own to fill in the gaps. While creating materials,
          I encountered problems that could not be solved without knowing how to
          program. To overcome this, I started learning to develop web
          applications. The more I learned, the more I fell in love with the
          different elements of software engineering, especially solving
          meaningful problems and bringing ideas to life. Thus, I decided to
          pivot to a career in software engineering in order to leverage
          technology to make a difference in people’s lives.
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
