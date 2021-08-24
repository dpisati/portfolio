import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainerInner}>
                <section>
                    <img src="/logo.svg" alt="Daniel Pisati" />
                    <div className={styles.nameContainer}>
                        <h3>Daniel Pisati</h3>
                        <p>
                            <a href="mailto:dpisati@gmail.com">
                                dpisati@gmail.com
                            </a>
                        </p>
                    </div>
                </section>
                <aside>
                    <Link href="#work">
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
