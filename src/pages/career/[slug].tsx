import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { motion } from 'framer-motion';
import { careerHistory, ICareerHistory } from '../../lib/data';

import { GetStaticPaths, GetStaticProps } from 'next';
import CareerPage from '../../components/CareerPage';

import { BeforeAndAfter } from '../../components/BeforeAndAfter';
import { MarketingImages } from '../../components/MarketingImages';

const allCareer = careerHistory;

export default function Career(career: ICareerHistory) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Head>
        <title>Daniel Pisati - {career.title}</title>
      </Head>
      <Header isLandingPage={false} redirectTo="/#career" />
      <motion.div initial={{ opacity: 0, scale: 2.5 }} animate={{ opacity: 1, scale: 1 }}>
        <CareerPage career={career} />

        {career.beforeAfter && <BeforeAndAfter beforeAfter={career.beforeAfter} />}
        {career.marketingImgs && <MarketingImages marketingImgs={career.marketingImgs} />}
      </motion.div>
      <Footer isLandingPage={false} />
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const props = allCareer.find((item) => item.slug === params.slug);

  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allCareer.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
