import styles from "./styles.module.scss";
import logo from "./../../assets/banner2.png";

export default function Header() {
  return (
    <>
    <header className={`${styles.header_section} ${styles.sticky}`}>
      <a href="#">
        <img src={logo} className={styles.logo} />
      </a>
      <nav className="main-nav">
        <ul className={styles.main_nav_list}>
          <li>
            <a className={styles.main_nav_link}  href="#">
              Home
            </a>
          </li>
          <li>
            <a className={styles.main_nav_link} href="#">
              About Us
            </a>
          </li>
          <li>
            <a className={styles.main_nav_link}  href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a className={styles.main_nav_link}  href="#">
              Features
            </a>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
