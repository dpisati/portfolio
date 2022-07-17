import React from 'react';
import styles from './styles.module.css';
import { motion } from 'framer-motion';
import { fadeInUp, container, fadeInRight } from '../../utils/animations.js';
import Image from 'next/image';
export default function ProjectPage({ project }) {
    return (
        <main className={styles.projectContainer}>
            <div
                className={styles.projectContent}
                style={{ border: ` 1px solid ${project.color}` }}
            >
                <spam
                    style={{
                        background: project.color,
                    }}
                ></spam>
                <header>
                    <motion.div
                        initial="initial"
                        variants={container}
                        animate="animate"
                        className={styles.projectTitle}
                    >
                        <motion.h1
                            initial="initial"
                            variants={fadeInUp}
                            animate="animate"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.h2
                            initial="initial"
                            variants={fadeInUp}
                            animate="animate"
                        >
                            {project.slogan}
                        </motion.h2>
                    </motion.div>

                    <motion.aside
                        initial="initial"
                        variants={container}
                        animate="animate"
                    >
                        <motion.p
                            initial="initial"
                            variants={fadeInUp}
                            animate="animate"
                        >
                            Tools used in this project
                        </motion.p>

                        <motion.div
                            initial="initial"
                            variants={container}
                            animate="animate"
                            className={styles.toolsUsedcontainer}
                        >
                            {project.tools.map((tool) => {
                                return (
                                    <motion.div
                                        variants={fadeInUp}
                                        key={tool.name}
                                        className={styles.tool}
                                    >
                                        <Image
                                            src={tool.icon}
                                            alt={tool.name}
                                            width={45}
                                            height={45}
                                            priority={true}
                                            layout=""
                                        />
                                        <p>{tool.name}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.aside>
                </header>

                <div className={styles.projectBody}>
                    <motion.img
                        initial="initial"
                        variants={fadeInRight}
                        animate="animate"
                        src={project.img}
                        alt={project.title}
                    />

                    <div className={styles.projectDescription}>
                        <motion.p
                            initial="initial"
                            variants={fadeInUp}
                            animate="animate"
                        >
                            {project.description}
                        </motion.p>
                        <motion.div
                            initial="initial"
                            variants={container}
                            animate="animate"
                            className={`
                                ${styles.links} 
                                ${
                                    project.demo && project.github
                                        ? ''
                                        : styles.single
                                }
                            `}
                        >
                            {project.demo && (
                                <motion.a
                                    initial="initial"
                                    variants={fadeInUp}
                                    animate="animate"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ background: project.color }}
                                >
                                    Visit
                                </motion.a>
                            )}
                            {project.github && (
                                <motion.a
                                    initial="initial"
                                    variants={fadeInUp}
                                    animate="animate"
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Github
                                </motion.a>
                            )}
                        </motion.div>
                    </div>
                </div>

                {project.design && (
                    <div className={styles.designProcessContainer}>
                        <hr />
                        <h3>{project.design.title}</h3>
                        <h4>The role</h4>
                        <p>{project.design.description}</p>

                        <h4>Challenges</h4>
                        <p>{project.design.challenges}</p>

                        <h4>Solution</h4>
                        <p>{project.design.solution}</p>

                        <hr />
                        <h4 className={styles.designPreview}>Design Preview</h4>
                        <div className={styles.iframeContainer}>
                            <iframe
                                frameBorder="0"
                                src={project.design.iframe}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
