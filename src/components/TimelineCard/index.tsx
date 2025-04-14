import React from "react";
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

  return (
    <div className={styles.timelineCard}>
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
    </div>
  );
};

export default TimelineCard;
