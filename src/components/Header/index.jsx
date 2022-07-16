import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Header({ isLandingPage }) {
    const [isSmallNav, setIsSmallNav] = useState(false);

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
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={82}
                                height={46}
                                layout="responsive"
                                priority={true}
                            />
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
                                    fill="#323232"
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
                </div>
            </div>
        </header>
    );
}
