import Head from 'next/head'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { motion } from 'framer-motion';
import {projects} from '../../lib/data';

import ProjectPage from '../../components/ProjectPage';


export default function Project(project) {
  return (
    <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Daniel Pisati - {project.title}</title>
        <meta name="description" content={`Daniel Pisati - ${project.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header isLandingPage={false} />
      <motion.div
            initial={{ opacity: 0, scale: 2.5}}
            animate={{ opacity: 1, scale: 1 }}            
        >
        <ProjectPage project={project} />
      </motion.div>
      <Footer isLandingPage={false} />
    </motion.div>
  )
}


export async function getStaticProps(context) {
    const { params } = context;
    const props = projects.find((item) => item.slug === params.slug);

    return {
        props
    }
}

export async function getStaticPaths() {
    const paths = projects.map((project) => ({
        params: {
            slug: project.slug,
        }
    }))

    return {
        paths,
        fallback: false
    }
}