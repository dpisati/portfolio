import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

import { projects } from '../lib/data';

import styles from './styles.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Pisati</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isLandingPage={true}/>
      <Hero />

      <span 
        id="work"
        style={{ position: 'relative', top: -110}}
      ></span>

      <div className={styles.projectsContainer}>
        {projects.map((project => {
          return (
            <ProjectCard key={project.slug} project={project} />
          )
        }))}
      </div>

      <About />
      <Footer isLandingPage={true}/>
    </div>
  )
}
