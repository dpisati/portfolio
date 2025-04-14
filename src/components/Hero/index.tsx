import Image from "next/image";
import styles from "./styles.module.css";
export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroMain}>
        <div className={styles.side}>
          <h1>Hello</h1>
          <p>
            I’m <strong>Daniel Pisati</strong> <br />
            UX / UI Designer and Frontend Developer 🚀
          </p>
        </div>
        <div className={styles.heroImgContainer}>
          <Image
            src="/assets/images/hero.png"
            alt=""
            width={546}
            height={630}
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
