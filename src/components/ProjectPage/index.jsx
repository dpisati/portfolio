import React from 'react'

import styles from './styles.module.css';

export default function ProjectPage({ project }) {
    return (
        <main className={styles.projectContainer}>
            <div className={styles.projectContent}>
                <header>
                    <div className={styles.projectTitle}>
                        <h1>{project.title}</h1>
                        <h2>{project.slogan}</h2>
                    </div>
                    <aside>
                        <h1>A</h1>
                        <h1>B</h1>
                        <h1>C</h1>
                        <h1>D</h1>
                    </aside>
                </header>

                <div className={styles.projectBody}>
                    <img src={project.img} alt={project.title} />

                    <div className={styles.projectDescription}>
                        <p>{project.description}</p>
                        <div className={styles.links}>
                            <button>Demo</button>
                            <button>Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
