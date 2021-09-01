import React from 'react'
import Image from 'next/image'

import styles from './styles.module.css'
import hero from '../../../public/assets/images/hero.png';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroMain}>
                <div className={styles.side}>
                    <h1>Hello</h1>
                    <p>
                        I’m <strong>Daniel Pisati</strong> <br />
                        UX  / UI Designer and
                        Frontend Developer 🚀
                    </p>
                </div>
                <div className={styles.heroImgContainer}>
                    <img src="/assets/images/hero.png" alt="aa" />
                </div>
            </div>
        </div>
    )
}
