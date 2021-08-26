import React from 'react'
import Link from 'next/link';

import styles from './styles.module.css';


export default function Header({isLandingPage}) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainerInner}>
                
                {isLandingPage ? (
                    <Link href="/">
                        <img className={styles.logo} src="/logo.svg" alt="DP" />
                    </Link>
                ) : (
                    <Link href="/#work">
                        <div className={styles.goBack}>
                            <img src="/assets/icons/arrowBack.svg" alt="Go Back" />
                        </div>
                    </Link>
                )}

                <div className={styles.linksContainer}>
                    <Link href={isLandingPage ? "#work" : "/#work"}>
                        <a>Work</a>
                    </Link>
                    <Link href={isLandingPage ? "#about" : "/#about"}>
                        <a>About</a>
                    </Link>
                    <a href="mailto:dpisati@gmail.com">Contact</a>
                </div>
            </div>
        </header>
    )
}
