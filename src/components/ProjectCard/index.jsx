import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

export default function ProjectCard({ project }) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div 
                className={styles.projectCardContainer}
                style={{ backgroundColor: project.color }}
            >
                <h1>{project.title}</h1>
                <p>{project.slogan}</p>
                
                <img src={project.img} alt={project.title + 'preview'} />

                <div className={styles.background}>
                    <img src={project.img} alt={project.title + 'preview'} />
                </div>
            </div>
        </Link>
    )
}
