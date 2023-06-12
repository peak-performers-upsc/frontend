import styles from "./hero.module.scss";
import logo from "./../../assets/emblem1.svg";

export default function Header() {
  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.hero_text}>
          <p className={styles.p1}>
            SUCCESS IS NOT FINAL, FILURE IS NOT FATAL, IT IS THE COURAGE TO
            CONTINUE THAT COUNTS
          </p>

          <p className={styles.p2}>
            Ascend to new heights of excellence with<br></br>Peak Performers,
            the premier institute for IAS aspirants.
            <br /> Harness your potential and conquer the challenges on your
            path to becoming a distinguished civil servant.
          </p>
        </div>
        <div className={styles.hero_img}>
          <img src={logo}></img>
        </div>
      </div>
    </>
  );
}
