import React from "react";
import { ICareerHistory } from "../../lib/data";
import { Slider } from "../Slider";
import styles from "./styles.module.css";

export const BeforeAndAfter = ({
  beforeAfter,
}: {
  beforeAfter: ICareerHistory["beforeAfter"];
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Before & After</h1>
      {beforeAfter?.map((item, index) => (
        <React.Fragment key={index}>
          <h2 className={styles.h2}>{item?.description}</h2>
          <div className={styles.sliderContainer}>
            <Slider beforeImage={item?.before} afterImage={item?.after} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
