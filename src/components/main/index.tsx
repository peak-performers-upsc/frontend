import styles from "./styles.module.scss";

export default function Header() {
  return (
    <>
      <div className={styles.hero_section}>
        <div className={styles.hero_text}>
          <p className={styles.p1} style={{ textTransform: "uppercase" }}>
            Become a UPSC CSE Topper guided by the UPSC Achievers themselves!{"   "}
          </p>
          <p className={styles.p2}>
          Peak Performers UPSC Tutorials' main motto is providing personalized UPSC CSE solutions tailored to the aspirant's strategic intellectual needs. Spearheaded by the duo of Bhupender K Bhardwaj (AIR 590/2013) and Pooja Mishra (3xMain/400 plus in GS/151 in Essay); join them to fulfill the Great Indian Dream of becoming a Civil Servant!
          </p>
        </div>
        {/* <div className={styles.hero_img}>
          <img src={emblemYellowImage} />
        </div> */}
      </div>
    </>
  );
}
