import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { motion } from 'framer-motion';
import { freelancing, projects } from '../../lib/data';

import { GetStaticPaths, GetStaticProps } from 'next';
import ProjectPage from '../../components/ProjectPage';

export interface IProject {
  title: string;
  slogan: string;
  img: string;
  color: string;
  slug: string;
  description: string;
  tools: {
    name: string;
    icon: string;
  }[];
  demo?: string;
  github?: string;
  design?: {
    title: string;
    description: string;
    challenges: string;
    solution: string;
    iframe: string;
  };
}

const allProjects = [...projects, ...freelancing];

export default function Project(project: IProject) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Daniel Pisati - {project.title}</title>
      </Head>
      <Header isLandingPage={false} />
      <motion.div initial={{ opacity: 0, scale: 2.5 }} animate={{ opacity: 1, scale: 1 }}>
        <ProjectPage project={project} />
      </motion.div>
      <Footer isLandingPage={false} />
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const props = allProjects.find((item) => item.slug === params.slug);

  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
