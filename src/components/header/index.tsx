import styles from "./styles.module.scss";
import logo from "./../../assets/banner2.png";
import { useState, useEffect, ReactNode } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Header() {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <>
      <header className={`${styles.header_section} ${styles.sticky}`}>
        <div>
          <a href="#">
            <img src={logo} className={styles.logo} />
          </a>
        </div>
        <div>
          <nav className="main-nav">
            <ul className={styles.main_nav_list}>
              <li>
                <a className={styles.main_nav_link}  href="/#">
                  Home
                </a>
              </li>
              <li>
                <a className={styles.main_nav_link} href="/#about">
                  About Us
                </a>
              </li>
              <li>
                <a className={styles.main_nav_link}  href="/#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className={styles.main_nav_link}  href="/#courses">
                  Courses
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <header className={styles.header_mobile}>
        <Accordion
          sx={{
            width: "100%",
            background: "black",
            padding: "1.5rem"
          }}
          expanded={expanded}
        >
          <AccordionSummary
            expandIcon={
              expanded?(
                <CloseIcon 
                  sx={{
                    color: "#f5d800"
                  }} 
                  fontSize="large"
                  onClick={() => setExpanded(e => !e)}
                />
              ):(
                <MenuIcon 
                  sx={{
                    color: "#f5d800"
                  }} 
                  fontSize="large"
                  onClick={() => setExpanded(e => !e)}
                />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>
              <a href="#">
                <img src={logo} className={styles.logo} />
              </a>
            </div>
          </AccordionSummary>
          <AccordionDetails 
            sx={{ 
              color: "#d6d6d6",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "0 2rem",
              fontSize: "20px"
            }}
          >
            <ul className={styles.main_nav_list}>
              <li>
                <a className={styles.main_nav_link}  href="/#">
                  Home
                </a>
              </li>
              <li>
                <a className={styles.main_nav_link} href="/#about">
                  About Us
                </a>
              </li>
              <li>
                <a className={styles.main_nav_link}  href="/#contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a className={styles.main_nav_link}  href="/#courses">
                  Courses
                </a>
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </header>
    </>
  );
}
