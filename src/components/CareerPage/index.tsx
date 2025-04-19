import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ICareerHistory, tools } from "../../lib/data";
import { container, fadeInRight, fadeInUp } from "../../utils/animations";
import styles from "./styles.module.css";

export default function CareerPage({ career }: { career: ICareerHistory }) {
  const [showFigma, setShowFigma] = useState(false);

  const careerTools = career.tools.map((tool) => {
    const foundTool = tools.find((t) => t.id === tool);

    return {
      ...foundTool,
      icon: foundTool ? foundTool.icon : "/images/tools/unknown.png",
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setShowFigma(true);
    }, 1000);
  }, []);

  return (
    <main className={styles.projectContainer}>
      <div
        className={styles.projectContent}
        style={{ border: `1px solid ${career.color}` }}
      >
        <span
          style={{
            background: career.color,
          }}
        ></span>
        <header>
          <motion.div
            initial="initial"
            variants={container}
            animate="animate"
            className={styles.projectTitle}
          >
            <motion.h1 initial="initial" variants={fadeInUp} animate="animate">
              {career.company}
            </motion.h1>
            <motion.h2 initial="initial" variants={fadeInUp} animate="animate">
              {career.title}
            </motion.h2>
            <motion.h3 initial="initial" variants={fadeInUp} animate="animate">
              {career.year}
            </motion.h3>
          </motion.div>

          <motion.aside
            initial="initial"
            variants={container}
            animate="animate"
          >
            <motion.p initial="initial" variants={fadeInUp} animate="animate">
              Tools used in this company
            </motion.p>

            <motion.div
              initial="initial"
              variants={container}
              animate="animate"
              className={styles.toolsUsedContainer}
            >
              {careerTools.map((tool) => {
                return (
                  <motion.div
                    variants={fadeInUp}
                    key={tool.title}
                    className={styles.tool}
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.title}
                      width={45}
                      height={45}
                      priority={true}
                      layout="intrinsic"
                    />
                    <p>{tool.title}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.aside>
        </header>

        <div className={styles.projectBody}>
          <motion.img
            initial="initial"
            variants={fadeInRight}
            animate="animate"
            src={career.mainImg}
            alt={career.title}
          />

          <div className={styles.projectDescription}>
            <motion.p initial="initial" variants={fadeInUp} animate="animate">
              {career.description}
            </motion.p>
            <motion.div
              initial="initial"
              variants={container}
              animate="animate"
              className={styles.links}
            >
              <motion.a
                initial="initial"
                variants={fadeInUp}
                animate="animate"
                href={career.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: career.color,
                }}
              >
                Company Website
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
