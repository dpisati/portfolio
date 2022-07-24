import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";

import { motion } from "framer-motion";

import { projects } from "../lib/data";

import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <link rel="preload" as="image" href="/assets/images/hero.png" />
        <title>Daniel Pisati - Designer / Developer</title>

        <meta
          key="metaTitle"
          name="title"
          content="Daniel Pisati - Designer / Developer"
        />
        <meta
          key="metaDescription"
          name="description"
          content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀"
        />

        <meta
          key="metaColor"
          name="msapplication-TileColor"
          content="#da532c"
        />
        <meta key="metaThemeColor" name="theme-color" content="#ffffff" />

        <meta key="metaOGTipe" property="og:type" content="website" />
        <meta
          key="metaOGUrl"
          property="og:url"
          content="https://dpportfolio.vercel.app/"
        />
        <meta
          key="metaOGTitle"
          property="og:title"
          content="Daniel Pisati - Designer / Developer"
        />
        <meta
          key="metaOGDescription"
          property="og:description"
          content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀"
        />

        <meta
          key="metaOGImageHTTPS"
          property="og:image:secure_url"
          content="https://dpportfolio.vercel.app/shareImg.png"
        />

        <meta
          property="og:title"
          content="Daniel Pisati - Designer / Developer"
        />
        <meta
          property="og:image"
          content="https://dpportfolio.vercel.app/linkedin.jpg"
        />
        <meta
          property="og:description"
          content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀"
        />
        <meta property="og:url" content="https://dpportfolio.vercel.app/" />

        <meta
          key="metaTwitterCard"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="metaTwitterUrl"
          property="twitter:url"
          content="https://dpportfolio.vercel.app/"
        />
        <meta
          key="metaTwitterTitle"
          property="twitter:title"
          content="Daniel Pisati - Designer / Developer"
        />
        <meta
          key="metaTwitterDescription"
          property="twitter:description"
          content="Hi, I'm Daniel Pisati, a UX / UI Designer and frontend developer 🚀"
        />

        <meta
          key="metaTwitterImageHTTPS"
          property="twitter:image:secure_url"
          content="https://dpportfolio.vercel.app/shareImg.png"
        />
      </Head>

      <Header isLandingPage={true} />
      <Hero />

      <span id="work" style={{ position: "relative", top: -80 }}></span>

      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          return <ProjectCard key={project.slug} project={project} />;
        })}
      </div>

      <About />
      <Footer isLandingPage={true} />
    </motion.div>
  );
}
