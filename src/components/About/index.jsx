import React from 'react'

import styles from './styles.module.css'

export default function About() {
    return (
        <div id="about" className={styles.aboutContainer}>
            <div className={styles.imageContainer}>
                <img src="/assets/images/fullBody.png" alt="Daniel Pisati" />
            </div>

            <main>
                <h1>About</h1>
                <p>
                I’m <strong>Daniel Pisati</strong>, an designer / developer 
                based in Christchurch, New Zealand 🌏.
                My passions are User Interface, 3D illustration, 
                animation and frontend development. 
                I’ve had the opportunity to combine my <strong>design</strong> expertise 
                with <strong>web development</strong>, 🚀
                combining these two amazing worlds to solve peoples problems.
                </p>

                <div className={styles.contactsContainer}>
                    <a href="https://www.facebook.com/daniel.pisati" target="_blank" rel="noreferrer">
                        <div className={`${styles.contact} ${styles.facebook}`}>
                            <img src="/assets/icons/facebook.svg" alt="facebook" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-pisati/" target="_blank" rel="noreferrer">
                        <div className={`${styles.contact} ${styles.linkedin}`}>
                            <img src="/assets/icons/linkedin.svg" alt="linkedin" />
                        </div>
                    </a>
                    <a href="https://github.com/dpisati" target="_blank" rel="noreferrer">
                        <div className={`${styles.contact} ${styles.github}`}>
                            <img src="/assets/icons/github.svg" alt="github" />
                        </div>
                    </a>
                    <a href="mailto:dpisati@gmail.com">
                        <div className={`${styles.contact} ${styles.email}`}>
                            <img src="/assets/icons/email.svg" alt="email" />
                        </div>
                    </a>
                </div>
            </main>
        </div>
    )
}
