import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

export default function Footer({isLandingPage}) {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
                <section>
                    <Link href="/">
                        <img src="/logo.svg" alt="DP Logo" />
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
                <aside>
                    <Link href={isLandingPage ? "#work" : "/#work"}>
                        <a>Work</a>
                    </Link>
                    <a href="mailto:dpisati@gmail.com">
                        Contact
                    </a>
                </aside>
            </div>
        </footer>
    )
}
