import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';

import { container, fadeInRight, fadeInUp } from '../../utils/animations.js';

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.7 });
    const containerAnimation = useAnimation();
    const aboutPictureControl = useAnimation();

    useEffect(() => {
        containerAnimation.start('animate');
        aboutPictureControl.start('animate');

        if (inView) {
            containerAnimation.start('animate');
            aboutPictureControl.start('animate');
        } else {
            containerAnimation.start('initial');
            aboutPictureControl.start('initial');
        }
    }, [inView]);

    return (
        <motion.div
            id="about"
            className={styles.aboutContainer}
            variants={container}
            initial="initial"
            animate={containerAnimation}
            ref={ref}
        >
            <motion.div
                initial="initial"
                variants={fadeInRight}
                animate={aboutPictureControl}
                className={styles.imageContainer}
            >
                <div className={styles.aboutImgContainer}>
                    <Image
                        src="/assets/images/fullBody.png"
                        alt="Daniel full body 3D character"
                        width={585}
                        height={793}
                        layout="responsive"
                        priority={true}
                    />
                </div>
            </motion.div>

            <main>
                <motion.h2 variants={fadeInUp}>About</motion.h2>
                <motion.p variants={fadeInUp}>
                    I’m <strong>Daniel Pisati</strong>, an designer / developer
                    based in Christchurch, New Zealand 🌏. My passions are User
                    Interface, 3D illustration, animation and frontend
                    development. I’ve had the opportunity to combine my{' '}
                    <strong>design</strong> expertise with{' '}
                    <strong>web development</strong>, 🚀 merging these two
                    amazing worlds to solve peoples problems.
                </motion.p>

                <motion.div className={styles.contactsContainer}>
                    <motion.a
                        variants={fadeInUp}
                        href="https://www.facebook.com/daniel.pisati"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={`${styles.contact} ${styles.facebook}`}>
                            <Image
                                src="/assets/icons/facebook.svg"
                                alt="facebook"
                                width={35}
                                height={35}
                                layout="intrinsic"
                                priority={true}
                            />
                        </div>
                    </motion.a>
                    <motion.a
                        variants={fadeInUp}
                        href="https://www.linkedin.com/in/daniel-pisati/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={`${styles.contact} ${styles.linkedin}`}>
                            <Image
                                src="/assets/icons/linkedin.svg"
                                alt="linkedin"
                                width={35}
                                height={35}
                                layout="intrinsic"
                                priority={true}
                            />
                        </div>
                    </motion.a>
                    <motion.a
                        variants={fadeInUp}
                        href="https://github.com/dpisati"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={`${styles.contact} ${styles.github}`}>
                            <Image
                                src="/assets/icons/github.svg"
                                alt="github"
                                width={35}
                                height={35}
                                layout="intrinsic"
                                priority={true}
                            />
                        </div>
                    </motion.a>
                    <motion.a
                        variants={fadeInUp}
                        href="mailto:dpisati@gmail.com"
                    >
                        <div className={`${styles.contact} ${styles.email}`}>
                            <Image
                                src="/assets/icons/email.svg"
                                alt="email"
                                width={35}
                                height={35}
                                layout="intrinsic"
                                priority={true}
                            />
                        </div>
                    </motion.a>
                </motion.div>
            </main>
        </motion.div>
    );
}
