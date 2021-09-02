import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import styles from './styles.module.css'

export default function ProjectCard({ project }) {
    const { ref, inView } = useInView({ threshold: .2 });
    const animation = useAnimation();
  
    useEffect(() => {  
      if(inView) {
        animation.start({
            opacity: 1,
            y: 0
        })
      } else {
        animation.start({
            opacity: 0,
            y: 100
        })
      }
    }, [inView])

    return (
        <Link href={`/projects/${project.slug}`}>
            <motion.div 
                animate={animation}
                className={styles.projectCardContainer}
                ref={ref}
                style={{ 
                    backgroundImage:
                    `linear-gradient(
                      155deg, 
                      ${project.color}60,
                      ${project.color} 70%
                    )`
                }}
            >
                
                <motion.h2>{project.title}</motion.h2>
                <p>{project.slogan}</p>
                
                <div className={styles.projectImgPreview}>
                    <Image 
                        src={project.img} 
                        alt={project.title + ' preview'} 
                        width={260}    
                        height={150}
                        layout='responsive'
                        />
                </div>


                <div className={styles.background}>
                    <Image 
                        src={project.img} 
                        alt="" 
                        width={260}    
                        height={150}
                        layout='responsive'
                        />
                </div>
            </motion.div>
        </Link>
    )
}
