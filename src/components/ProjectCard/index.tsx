import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IProject } from '../../pages/projects/[slug]';

import styles from './styles.module.css';

export default function ProjectCard({ project }: { project: IProject }) {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
            });
        } else {
            animation.start({
                opacity: 0,
                y: 30,
            });
        }
    }, [inView, animation]);

    return (
        <Link href={`/projects/${project.slug}`} passHref>
            <motion.div
                animate={animation}
                className={styles.projectCardContainer}
                ref={ref}
                style={{
                    backgroundImage: `linear-gradient(
                      155deg, 
                      ${project.color}60,
                      ${project.color} 70%
                    )`,
                }}
            >
                <motion.h2>{project.title}</motion.h2>
                <p>{project.slogan}</p>

                <div className={styles.projectImgPreview}>
                    <Image
                        src={project.img}
                        alt={project.title + ' preview'}
                        width={260}
                        height={150}
                        layout="responsive"
                        priority={true}
                    />
                </div>

                <div className={styles.background}>
                    <Image
                        src={project.img}
                        alt=""
                        width={260}
                        height={150}
                        layout="responsive"
                        priority={true}
                    />
                </div>
            </motion.div>
        </Link>
    );
}
