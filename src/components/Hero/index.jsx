import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

import Hero3D from '../Hero3D';



export default function Hero() {
    const [show3d, setShow3d] = useState(false)
    
    useEffect(() => {
        setTimeout(() => {
            setShow3d(true);
        }, 3000)
    }, [])


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
                
                    <Hero3D style={{ opacity: show3d ? 1 : 0 }} />
            
                </div>
                {/* <div className={styles.heroImgContainer}>
                    <Image 
                        src="/assets/images/hero.png" 
                        alt="" 
                        width={546}    
                        height={630}
                        layout="responsive"
                        />
                </div> */}
            </div>
        </div>
    )
}
