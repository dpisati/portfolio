import React from 'react'
import styles from './styles.module.css'
import Hero3D from '../Hero3D';

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

                <div className={styles.heroMain3dContainer}>
                    <Hero3D  />
                </div>
            </div>
        </div>
    )
}
