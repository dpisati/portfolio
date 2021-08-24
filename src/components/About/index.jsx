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
                    Hi, I'm Daniel Pisati, an UX / UI Designer 
                    and frontend developer 🚀 from Brazil. 
                    Currently I live in Christchurch/New Zealand.
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
