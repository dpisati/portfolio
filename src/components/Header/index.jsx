import React from 'react'
import Link from 'next/link';

import styles from './styles.module.css';

// import dpLogo from '../../assets/images/logo.svg'

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainerInner}>
                <img className={styles.logo} src="/logo.svg" alt="DP" />
                <div className={styles.linksContainer}>
                    <Link href="#work">
                        <a>Work</a>
                    </Link>
                    <Link href="#about">
                        <a>About</a>
                    </Link>
                    
                    <a href="mailto:dpisati@gmail.com">Contact</a>
                </div>
            </div>
        </header>
    )
}
