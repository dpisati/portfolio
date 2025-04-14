import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

import { careerHistory, tools as dataTools } from "../../lib/data";

interface TimelineCardProps {
  year: string;
  company: string;
  title: string;
  description: string;
  tools: string[];
  left?: boolean;
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  year,
  company,
  title,
  description,
  tools,
  left = false,
}) => {
  const details = careerHistory.find((item) => item.company === company);

  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
      });
    } else {
      animation.start({
        opacity: 0,
        x: left ? -50 : 50,
      });
    }
  }, [inView, animation, left]);

  return (
    <motion.div
      className={styles.timelineCard}
      ref={ref}
      animate={animation}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h3 className={styles.company}>
        <a href={details.url} target="_blank" rel="noreferrer">
          {company}
        </a>
      </h3>

      <h4 className={styles.title}>{title}</h4>
      <h5 className={styles.year}>{year}</h5>

      <p className={styles.description}>{description}</p>
      <ul
        className={styles.toolsList}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: left ? "flex-end" : "flex-start",
        }}
      >
        {tools.map((t, index) => {
          const tool = dataTools.find((tool) => tool.id === t);

          if (!tool) return null;

          return (
            <li
              key={index}
              className={styles.toolItem}
              style={{
                backgroundColor: tool.backgroundColor,
                color: tool.textColor,
              }}
            >
              {tool.title}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default TimelineCard;
