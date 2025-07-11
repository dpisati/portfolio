import ThreeDHead from "../ThreeDHead";
import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroMain}>
        <div className={styles.side}>
          <h1>Hello</h1>
          <p>
            I’m <strong>Daniel Pisati</strong> <br />
            UX Designer and Frontend Developer 🚀
          </p>
        </div>
        <div className={styles.heroImgContainer}>
          <ThreeDHead />
        </div>
      </div>
    </div>
  );
}
