import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';
import { useTheme } from 'next-themes';

export default function Footer({ isLandingPage }) {
    const { theme } = useTheme();

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
                <section>
                    <Link href="/">
                        <div className={styles.footerLogoContainer}>
                            {theme === 'light' ? (
                                <Image
                                    src="/logo.svg"
                                    alt="DP Logo"
                                    width={82}
                                    height={46}
                                    layout="responsive"
                                    priority={true}
                                />
                            ) : (
                                <Image
                                    src="/logoDark.svg"
                                    alt="DP Logo"
                                    width={82}
                                    height={46}
                                    layout="responsive"
                                    priority={true}
                                />
                            )}
                        </div>
                    </Link>
                    <div className={styles.nameContainer}>
                        <h3>Daniel Pisati</h3>
                        {/* <p>
                            <a href="mailto:dpisati@gmail.com">
                                dpisati@gmail.com
                            </a>
                        </p> */}
                    </div>
                </section>
                <div>
                    <Link href={isLandingPage ? '#work' : '/#work'}>
                        <a>Work</a>
                    </Link>
                    <a href="mailto:dpisati@gmail.com">Contact</a>
                </div>
            </div>
        </footer>
    );
}
