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
                        <div className={styles.logo} >
                        <Image 
                            src="/logo.svg" 
                            alt="Logo" 
                            width={82}  
                            height={46}
                            layout="responsive"
                        />
                        </div>
                    </Link>
                ) : (
                    <Link href="/#work">
                        <div className={styles.goBack}>
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.294922 6.70496L6.29492 12.705L7.70492 11.295L3.12492 6.70496L7.70492 2.11496L6.29492 0.704956L0.294922 6.70496Z" fill="#323232"/>
                            </svg>
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
