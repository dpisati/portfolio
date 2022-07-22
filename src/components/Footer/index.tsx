import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';
import Logo from '../Logo';

interface FooterProps {
    isLandingPage: boolean;
}

export default function Footer({ isLandingPage }: FooterProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
                <section>
                    <Link href="/" passHref>
                        <div className={styles.footerLogoContainer}>
                            <Logo />
                        </div>
                    </Link>
                    <div className={styles.nameContainer}>
                        <h3>Daniel Pisati</h3>
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
