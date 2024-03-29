import React, { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import styles from './styles.module.css';

import { container, fadeInRight, fadeInUp } from '../../utils/animations';

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
    }, [inView, aboutPictureControl, containerAnimation]);

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
                    I’m <strong>Daniel Pisati</strong>, designer and developer
                    based in Christchurch, New Zealand 🌏. My passions are User
                    Interface, 3D illustration, animation and frontend
                    development. Passionate about developing products that
                    impact people, with the user experience as key to create
                    intuitive and beautiful interfaces. Always open to sharing
                    and learning new things... Keen to have a chat? Hit me up on
                    the social media 😉
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
                                width={22}
                                height={22}
                                layout="responsive"
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
                                width={22}
                                height={22}
                                layout="responsive"
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
                                width={22}
                                height={22}
                                layout="responsive"
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
                                width={22}
                                height={22}
                                layout="responsive"
                                priority={true}
                            />
                        </div>
                    </motion.a>
                </motion.div>
            </main>
        </motion.div>
    );
}
