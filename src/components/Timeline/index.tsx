import { useEffect, useRef, useState } from "react";
import { careerHistory } from "../../lib/data";
import TimelineCard from "../TimelineCard";
import styles from "./styles.module.css";

const Timeline = () => {
  const refs = useRef([]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div className={styles.timelineContainer}>
        <h2 className={styles.timelineTitle}>Career Timeline</h2>
        <div className={styles.timelineList}>
          {careerHistory.map((event, index) => (
            <TimelineCard
              key={index}
              year={event.year}
              company={event.company}
              title={event.title}
              description={event.description}
              tools={event.tools}
              left={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.timelineContainer}>
      <h2 className={styles.timelineTitle}>Career Timeline</h2>
      <div className={styles.timelineList}>
        <div className={styles.timelineLine} />
        {careerHistory.map((event, index) => (
          <div
            key={index}
            className={`${styles.timelineItem} ${styles.mobileResponsive} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
            ref={refs.current[index]}
          >
            <TimelineCard
              year={event.year}
              company={event.company}
              title={event.title}
              description={event.description}
              tools={event.tools}
              left={index % 2 === 0}
            />
            <div
              className={styles.timelineDot}
              style={{
                top: "40px",
                left: index % 2 === 0 ? "auto" : 0,
                right: index % 2 === 0 ? 0 : "auto",
                transform:
                  index % 2 !== 0 ? "translateX(-50%)" : "translateX(50%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
