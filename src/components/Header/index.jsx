import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import styles from './styles.module.css';


export default function Header({isLandingPage}) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContainerInner}>
                
                {isLandingPage ? (
                    <Link href="/">
                        <Image 
                            className={styles.logo} 
                            src="/logo.svg" 
                            alt="Logo" 
                            width={82}  
                            height={46}
                        />
                    </Link>
                ) : (
                    <Link href="/#work">
                        <div className={styles.goBack}>
                            <Image 
                                src="/assets/icons/arrowBack.svg" 
                                alt="Go Back" 
                                width={82}  
                                height={46}
                                />
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
