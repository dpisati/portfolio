import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { ThemeChanger } from '../ThemeChanger';
import { useTheme } from 'next-themes';
import Logo from '../Logo';

interface HeaderProps {
    isLandingPage: boolean;
}

export default function Header({ isLandingPage }: HeaderProps) {
    const [isSmallNav, setIsSmallNav] = useState(false);
    const [mounted, setMounted] = useState(false);
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

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <header
            className={`
                ${styles.headerContainer} 
                ${isSmallNav ? styles.smallNav : ''}
            `}
        >
            <div className={styles.headerContainerInner}>
                {isLandingPage ? (
                    <Logo />
                ) : (
                    <Link href="/#work" passHref>
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
