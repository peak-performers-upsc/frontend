import styles from "./course.module.scss";

export default function cards() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <span className={styles.subheading}>Batch details</span>
          <h2 className={styles.heading_secondary}>
            Begin A New Journey Today
          </h2>
        </div>
        <div
          className={`${styles.container} ${styles.grid} ${styles.grid__3__cols}  ${styles.margin_bottom_md}`}
        >
          <div className={styles.courses}>
            <div className={styles.course_content}>
              <div className={styles.course_tags}>
                <span className={styles.course_tag}>
                  Fast Track Batch for Prelims
                </span>
              </div>
              <p className={styles.course_title}>
                Bhupender Bhardwaj<br></br> 2013 UPSC CSE Batch/AIR 590
              </p>
              <ul className={styles.course_attributes}>
                <li className={styles.course_attribute}>
                  <span>
                    <strong>4</strong> month duration batch
                  </span>
                </li>
                <li className={styles.course_attribute}>
                  <span>
                    <strong>4</strong> days a week lectures.
                  </span>
                </li>
                <li className={styles.course_attribute}>
                  <span>
                    <strong>1</strong> hr a day lectures
                  </span>
                </li>
                <li className={styles.course_attribute}>
                  <span>Prelims test series <strong>(3)</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
