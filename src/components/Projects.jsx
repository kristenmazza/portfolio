import Project from './Project';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projects} id='projects'>
      <div className={styles.projectsContainer}>
        <h2>Projects</h2>
        <Project
          image={'/images/projects/speech-sound-sleuth.jpg'}
          alt={'Speech Sound Sleuth preview'}
          projectName={'Speech Sound Sleuth'}
          projectDescription={`Speech therapy game inspired by "Where's Waldo?" Players search for items tied to speech sounds in timed challenges. When an item is found, the timer stops for pronunciation practice. Backend tested using Supertest and MongoDB Memory Server.`}
          projectTechnologies={[
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'MongoDB',
          ]}
          urlLive={'https://speech-sound-sleuth.netlify.app/'}
          urlSource={
            'https://github.com/kristenmazza/speech-sound-sleuth-backend'
          }
          urlReadMore={
            'https://blog.kristenmazza.dev/posts/creating-speech-sound-sleuth-an-engaging-speech-articulation-game'
          }
        />

        <Project
          image={'/images/projects/blog-cms.png'}
          alt={'Blog preview'}
          projectName={'Blog'}
          projectDescription={
            'Straightforward blog platform that includes a RESTful API, front-end integration, and user authentication. Utilized AWS S3 for blog post image storage. Created an external interface tailored for admins with content management capabilities.'
          }
          projectTechnologies={[
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'Node.js',
            'Express',
            'MongoDB',
          ]}
          urlLive={'https://blog.kristenmazza.dev'}
          urlSource={'https://github.com/kristenmazza/blog-api'}
          urlReadMore={
            'https://blog.kristenmazza.dev/posts/from-concept-to-content-building-a-blog-from-scratch'
          }
        />

        <Project
          image={'/images/projects/shopping-main.png'}
          alt={'Shopping Cart preview'}
          projectName={'Shopping Cart'}
          projectDescription={
            'Mock-up of a shopping site with the ability to browse products and add items to cart. Used React Router for client-side routing and a public API to retrieve product details. Tested the user interface using Vitest (a testing framework) and React Testing Library.'
          }
          projectTechnologies={['HTML5', 'CSS3', 'JavaScript', 'React']}
          urlLive={'https://kristenmazza-shopping-cart.netlify.app/'}
          urlSource={'https://github.com/kristenmazza/shopping-cart'}
        />

        <Project
          image={'/images/projects/unilang.png'}
          alt={'Memory game preview'}
          projectName={'Uni Lang: A Memory Game'}
          projectDescription={`Uni Lang is a memory game consisting of 12 cards. Each card features the word "hello" in a different language. Earn points by clicking on the cards. The objective is to accumulate as many points as possible without clicking the same card twice.`}
          projectTechnologies={['HTML5', 'CSS3', 'JavaScript', 'React']}
          urlLive={'https://kristenmazza-memory-game.netlify.app/'}
          urlSource={'https://github.com/kristenmazza/memory-card'}
        />

        <Project
          image={'/images/projects/battleship.png'}
          alt={'Battleship preview'}
          projectName={'Battleship'}
          projectDescription={`Single-player game based on the classic Battleship strategic board game. Developed using Test Driven Development with Jest (a testing framework). Used webpack for bundling and compiling.`}
          projectTechnologies={['HTML5', 'CSS3', 'JavaScript']}
          urlLive={'https://kristenmazza.github.io/battleship/'}
          urlSource={'https://github.com/kristenmazza/battleship'}
        />

        <Project
          image={'/images/projects/etch-a-sketch.png'}
          alt={'Etch-a-sketch preview'}
          projectName={'Etch-a-Sketch'}
          projectDescription={`Browser version of the classic childhood toy. Activity features a customizable grid size, adjustable pen colors, erase functionality, and a clear grid option.`}
          projectTechnologies={['HTML5', 'CSS3', 'JavaScript']}
          urlLive={'https://kristenmazza.github.io/etch-a-sketch/'}
          urlSource={'https://github.com/kristenmazza/etch-a-sketch'}
        />
      </div>
    </section>
  );
}
