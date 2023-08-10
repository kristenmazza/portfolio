import styles from './Projects.module.css';

export default function Projects() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.projectsContainer}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <img
            className={styles.projectImage}
            src='/images/projects/shopping-main.png'
          />
          <div className={styles.projectBackground}></div>
          <div className={styles.projectDetails}>
            <h3>Shopping Cart</h3>
            <p>
              Mock-up of a shopping site with the ability to browse products and
              add items to cart. Used React Router for client-side routing and a
              public API to retrieve product details. Tested the user interface
              using Vitest (a testing framework) and React Testing Library.
            </p>
            <div className={styles.technologies}>
              <div className={styles.technology}>HTML5</div>
              <div className={styles.technology}>CSS3</div>
              <div className={styles.technology}>JavaScript</div>
              <div className={styles.technology}>React</div>
            </div>
            <div className={styles.previews}>
              <button
                className={styles.demoButton}
                onClick={onClickUrl(
                  'https://kristenmazza-shopping-cart.netlify.app/',
                )}
              >
                <span>Live Demo</span>
                <svg
                  className={styles.projectIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 512 512'
                >
                  <path d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                </svg>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
              <button
                className={styles.githubButton}
                onClick={onClickUrl(
                  'https://github.com/kristenmazza/shopping-cart',
                )}
              >
                <svg
                  alt='Visit Github profile'
                  className={styles.projectIcon}
                  width='98'
                  height='96'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  color='#000'
                  viewBox='0 0 100 100'
                >
                  <path d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' />
                </svg>
                <span>View Source</span>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImage}
            src='/images/projects/unilang.png'
          />
          <div className={styles.projectBackground}></div>
          <div className={styles.projectDetails}>
            <h3>Uni Lang: A Memory Game</h3>
            <p>
              Uni Lang is a memory game consisting of 12 cards. Each card
              features the word &quot;hello&quot; in a different language. Earn
              points by clicking on the cards. The objective is to accumulate as
              many points as possible without clicking the same card twice.
            </p>
            <div className={styles.technologies}>
              <div className={styles.technology}>HTML5</div>
              <div className={styles.technology}>CSS3</div>
              <div className={styles.technology}>JavaScript</div>
              <div className={styles.technology}>React</div>
            </div>
            <div className={styles.previews}>
              <button
                className={styles.demoButton}
                onClick={onClickUrl(
                  'https://kristenmazza-memory-game.netlify.app/',
                )}
              >
                <span>Live Demo</span>
                <svg
                  className={styles.projectIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 512 512'
                >
                  <path d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                </svg>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
              <button
                className={styles.githubButton}
                onClick={onClickUrl(
                  'https://github.com/kristenmazza/memory-card',
                )}
              >
                <svg
                  alt='Visit Github profile'
                  className={styles.projectIcon}
                  width='98'
                  height='96'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  color='#000'
                  viewBox='0 0 100 100'
                >
                  <path d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' />
                </svg>
                <span>View Source</span>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImage}
            src='/images/projects/battleship.png'
          />
          <div className={styles.projectBackground}></div>
          <div className={styles.projectDetails}>
            <h3>Battleship</h3>
            <p>
              Single-player game based on the classic Battleship strategic board
              game. Developed using Test Driven Development with Jest (a testing
              framework). Used webpack for bundling and compiling.
            </p>
            <div className={styles.technologies}>
              <div className={styles.technology}>HTML5</div>
              <div className={styles.technology}>CSS3</div>
              <div className={styles.technology}>JavaScript</div>
            </div>
            <div className={styles.previews}>
              <button
                className={styles.demoButton}
                onClick={onClickUrl(
                  'https://kristenmazza.github.io/battleship/',
                )}
              >
                <span>Live Demo</span>
                <svg
                  className={styles.projectIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 512 512'
                >
                  <path d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                </svg>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
              <button
                className={styles.githubButton}
                onClick={onClickUrl(
                  'https://github.com/kristenmazza/battleship',
                )}
              >
                <svg
                  alt='Visit Github profile'
                  className={styles.projectIcon}
                  width='98'
                  height='96'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  color='#000'
                  viewBox='0 0 100 100'
                >
                  <path d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' />
                </svg>
                <span>View Source</span>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <img
            className={styles.projectImage}
            src='/images/projects/etch-a-sketch.png'
          />
          <div className={styles.projectBackground}></div>
          <div className={styles.projectDetails}>
            <h3>Etch-a-Sketch</h3>
            <p>
              Browser version of the classic childhood toy. Activity features a
              customizable grid size, adjustable pen colors, erase
              functionality, and a clear grid option.
            </p>
            <div className={styles.technologies}>
              <div className={styles.technology}>HTML5</div>
              <div className={styles.technology}>CSS3</div>
              <div className={styles.technology}>JavaScript</div>
            </div>
            <div className={styles.previews}>
              <button
                className={styles.demoButton}
                onClick={onClickUrl(
                  'https://kristenmazza.github.io/etch-a-sketch/',
                )}
              >
                <span>Live Demo</span>
                <svg
                  className={styles.projectIcon}
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                  viewBox='0 0 512 512'
                >
                  <path d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z' />
                </svg>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
              <button
                className={styles.githubButton}
                onClick={onClickUrl(
                  'https://github.com/kristenmazza/etch-a-sketch',
                )}
              >
                <svg
                  alt='Visit Github profile'
                  className={styles.projectIcon}
                  width='98'
                  height='96'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  color='#000'
                  viewBox='0 0 100 100'
                >
                  <path d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z' />
                </svg>
                <span>View Source</span>
                <span className={styles.srOnly}>(opens in new tab)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
