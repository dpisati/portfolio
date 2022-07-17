import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { ThemeChanger } from '../ThemeChanger';
import { useTheme } from 'next-themes';

export default function Header({ isLandingPage }) {
    const [isSmallNav, setIsSmallNav] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const changeNavBackground = () => {
            if (window.scrollY >= 120) {
                setIsSmallNav(true);
            } else {
                setIsSmallNav(false);
            }
        };

        window.addEventListener('scroll', changeNavBackground);

        return () => {
            window.removeEventListener('scroll', changeNavBackground);
        };
    }, []);

    return (
        <header
            className={`
                ${styles.headerContainer} 
                ${isSmallNav ? styles.smallNav : ''}
            `}
        >
            <div className={styles.headerContainerInner}>
                {isLandingPage ? (
                    <Link href="/">
                        <div className={styles.logo}>
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 82 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M33.0171 18.3936C33.1875 18.3409 36.4255 30.9522 37.1072 36.288C37.7889 41.6238 37.2777 42.5936 36.4255 43.2753C35.7439 43.8207 35.119 43.7298 34.8917 43.6162"
                                    stroke={`${
                                        theme === 'light' ? '#323232' : '#fff'
                                    }`}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M60.2847 42.0297L60.1143 42.2001"
                                    stroke={`${
                                        theme === 'light' ? '#323232' : '#fff'
                                    }`}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M67.1015 4.41891C68.5217 4.02125 70.6804 3.15778 67.9536 2.8851C64.5452 2.54425 46.4804 1.46899 30.4606 2.32111C14.4409 3.17322 2 4.93018 2 7.14568C2 9.36118 12.0549 10.3837 37.2775 12.5992C62.5001 14.8147 79.7128 17.3711 79.8832 21.2908C80.0537 25.2105 68.9762 27.7668 51.4226 28.2781C37.3798 28.6871 15.2362 26.0626 5.91973 24.6992"
                                    stroke={`${
                                        theme === 'light' ? '#323232' : '#fff'
                                    }`}
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </Link>
                ) : (
                    <Link href="/#work">
                        <div className={styles.goBack}>
                            <svg
                                width="8"
                                height="13"
                                viewBox="0 0 8 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.294922 6.70496L6.29492 12.705L7.70492 11.295L3.12492 6.70496L7.70492 2.11496L6.29492 0.704956L0.294922 6.70496Z"
                                    fill={`${
                                        theme === 'light' ? '#323232' : '#fff'
                                    }`}
                                />
                            </svg>
                        </div>
                    </Link>
                )}

                <div className={styles.linksContainer}>
                    <Link href={isLandingPage ? '#work' : '/#work'}>
                        <a className={styles.link}>Work</a>
                    </Link>
                    <Link href={isLandingPage ? '#about' : '/#about'}>
                        <a className={styles.link}>About</a>
                    </Link>
                    <a className={styles.link} href="mailto:dpisati@gmail.com">
                        Contact
                    </a>
                    <ThemeChanger />
                </div>
            </div>
        </header>
    );
}
