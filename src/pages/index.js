import { useEffect } from 'react';
import Head from 'next/head'
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

import { motion } from 'framer-motion';

import { projects } from '../lib/data';

import styles from './styles.module.css'

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} 
    >
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap" rel="stylesheet"/>

        <title>Daniel Pisati - Designer / Developer</title>
        <meta name="title" content="Daniel Pisati - Designer / Developer" />
        <meta name="description" content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀" />

        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dpportfolio.vercel.app/" />
        <meta property="og:title" content="Daniel Pisati - Designer / Developer" />
        <meta property="og:description" content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀" />
        <meta property="og:image" content="/share.png"/>

        
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://dpportfolio.vercel.app/"/>
        <meta property="twitter:title" content="Daniel Pisati - Designer / Developer"/>
        <meta property="twitter:description" content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀" />
        <meta property="twitter:image" content="/share.png" />
      </Head>

      <Header isLandingPage={true}/>
      <Hero />

      <span 
        id="work"
        style={{ position: 'relative', top: -110}}
      ></span>

      <div 
        className={styles.projectsContainer}
      >
        {projects.map((project => {
          return (
              <ProjectCard key={project.slug} project={project}/>
          )
        }))}
      </div>

      <About />
      <Footer isLandingPage={true}/>
    </motion.div>
  )
}
