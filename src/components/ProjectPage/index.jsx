import React, { useEffect, useState } from 'react'

import styles from './styles.module.css';

export default function ProjectPage({ project }) {

    // const [color, setColor] = useState('');

    // function hexToRgbA(hex){
    //     var c;
    //     if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
    //         c= hex.substring(1).split('');
    //         if(c.length== 3){
    //             c= [c[0], c[0], c[1], c[1], c[2], c[2]];
    //         }
    //         c= '0x'+c.join('');
    //         return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+', .2';
    //     }
    //     throw new Error('Bad Hex');
    // }
    
    
    // useEffect(() => {
    //     setColor(hexToRgbA(project.color));
    // }, [])


    return (
        <main className={styles.projectContainer}>
            <div 
                className={styles.projectContent} 
                style= {{ border: ` 1px solid ${project.color}` }}
            >
                <spam style= {{ background: project.color }}></spam>
                <header>
                    <div className={styles.projectTitle}>
                        <h1>{project.title}</h1>
                        <h2>{project.slogan}</h2>
                    </div>
                    
                    
                    <aside>
                        <p>Tools used in this project</p>

                        <div className={styles.toolsUsedcontainer}>

                            {project.tools.map(tool => {
                                return (
                                    <div key={tool.name} className={styles.tool}>
                                        <img src={tool.icon} alt={tool.name} />
                                        <p>{tool.name}</p>
                                    </div>
                                )
                            })}

                        </div>
                        
                    </aside>
                </header>

                <div className={styles.projectBody}>
                    <img src={project.img} alt={project.title} />

                    <div className={styles.projectDescription}>
                        <p>{project.description}</p>
                        <div className={`
                            ${styles.links} 
                            ${project.demo && project.github ? '' : styles.single}
                        `}>
                            {project.demo && (
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                            )}
                            {project.github && (
                                <a 
                                    href="" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
