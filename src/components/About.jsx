import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2>About</h2>
        <p>
          I’m a software engineer who is excited to create accessible websites
          and solve meaningful problems. I have built more than a dozen
          independent projects in the past year, and with each new project, I
          expanded my toolkit with fresh skills. Some of the projects I’m most
          proud of are Battleship and a memory game called Uni Lang because I
          became comfortable with React and unit testing while developing them.
        </p>
        <p>
          My past experience as a speech-language pathologist provides me with a
          unique approach, and it reinforces my interest in creating
          user-friendly web applications that everyone can use. My interest in
          software engineering was ignited during the pandemic when speech
          therapy services moved online. I relied heavily on the minimal
          existing digital materials and created more to fill the gaps. However,
          I was limited by not knowing how to code when making these materials.
          So, I learned to code!
        </p>
        <p>
          While learning to code and working through a self-paced curriculum, I
          joined a local Meetup group called Ventura Code and Coffee to connect
          with other developers, and I currently serve as an organizer. I look
          forward to continuing to broaden and deepen my skills alongside other
          great developers.
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
