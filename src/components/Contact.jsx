import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.contactContainer}>
        <div className={styles.envelope}>
          <img src='/images/envelope-300px.png' />
        </div>
        <h2>Contact</h2>
        <div className={styles.contactText}>
          <p>
            If you would like to contact me for any opportunities or just a
            chat, feel free to reach out via&nbsp;
            <span>
              <a
                className={styles.link}
                href='https://www.linkedin.com/in/kristenmazza/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </span>
            .
          </p>
        </div>
        <div className={styles.contactDetails}>
          <a
            className={styles.button}
            href='https://www.linkedin.com/in/kristenmazza/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              alt='Visit LinkedIn profile'
              className={styles.logo}
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              color='#000'
              width='100'
              height='100'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
            </svg>
          </a>
          <a
            className={styles.button}
            href='https://github.com/kristenmazza'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              alt='Visit Github profile'
              className={styles.logo}
              width='98'
              height='96'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              color='#000'
              viewBox='0 0 100 100'
              cursor='pointer'
              pointerEvents='all'
            >
              <path d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' />
            </svg>
          </a>
        </div>
        <div className={styles.divider}></div>
        <p className={styles.copyright}> © 2023 Kristen Mazza</p>
      </div>
    </section>
  );
}
