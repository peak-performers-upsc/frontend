import {
    Link,
    Typography,
    Chip
} from "@mui/material"
import {
    Call,
    WhatsApp,
    Email,
    Facebook,
    Instagram,
    Home,
    Info,
    Help
} from '@mui/icons-material';
import styles from "./styles.module.scss"
import bannerImage from "../../assets/banner2.png"
import quoraImage from "../../assets/quora.png"
import palette from "../../theme/palette";

const socialMediaFontSize = 24

const iconStyle = { 
    fontSize: socialMediaFontSize, 
    color: "#cccccc !important"
}

const socialMediaLinks = [
    {
        link: "https://www.facebook.com/profile.php?id=100064031433867",
        component: <Facebook sx={iconStyle} />,
        name: "Facebook"
    },
    {
        link: "https://www.instagram.com/peakperformers.upsctutorials/",
        component: <Instagram sx={iconStyle} />,
        name: "Instagram"
    },
    {
        link: "https://www.quora.com/profile/Bhupender-K-Bhardwaj",
        component: <img src={quoraImage} height={socialMediaFontSize} width={socialMediaFontSize}/>,
        name: "Quora"
    }
]

const contactUsLinks = [
    {
        link: "tel:+919892379238",
        component: <Call sx={iconStyle} />,
        name: "Primary"
    },
    {
        link: "tel:+919702409575",
        component: <Call sx={iconStyle} />,
        name: "Secondary"
    },
    {
        link: "mailto:bhupihugedoors@yahoo.co.in",
        component: <Email sx={iconStyle} />,
        name: "Mail"
    },
    {
        link: "https://wa.me/919892379238",
        component: <WhatsApp sx={iconStyle} />,
        name: "Whatsapp"
    }
]

const links = [
    {
        link: "/",
        component: <Home sx={iconStyle}/>,
        name: "Home"
    },
    {
        link: "/#about",
        component: <Info sx={iconStyle} />,
        name: "About"
    },
    {
        link: "/#courses",
        component: <Help sx={iconStyle} />,
        name: "Courses"
    }
]

export default function Footer() {
    return (
        <div className={styles.footer_container} id="contact">
            <div className={styles.main}>
                <div className={styles.socials}>
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <img 
                            src={bannerImage}
                            alt="Peak Performers"
                            className={styles.logo}
                            height={"30rem"}
                        />
                    </div>
                    <div className={styles.media}>
                        {socialMediaLinks.map((link, i) => (
                            <Link key={i} href={link.link}>
                                <Chip 
                                    label={link.name} 
                                    sx={{
                                        color: "#cccccc", 
                                        fontSize: socialMediaFontSize*.7,
                                        border: "#cccccc",
                                        "@media screen and (max-width: 750px)": {
                                            fontSize: 15
                                        }
                                    }}
                                    avatar={link.component}
                                    variant="outlined"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.contact}>
                    <Typography 
                        variant="h2" 
                        sx={{
                            color: palette.primaryColor, 
                            fontSize: 36,
                            "@media screen and (max-width: 750px)": {
                                fontSize: 30
                            }
                        }}
                        className={styles.title}
                    >
                        Contact Us
                    </Typography>
                    <div className={styles.content}>
                        {contactUsLinks.map((link, i) => (
                            <Link key={i} href={link.link}>
                                <Chip 
                                    label={link.name} 
                                    sx={{
                                        color: "#cccccc", 
                                        fontSize: socialMediaFontSize*.7,
                                        border: "#cccccc",
                                        "@media screen and (max-width: 750px)": {
                                            fontSize: 15
                                        }
                                    }}
                                    avatar={link.component}
                                    variant="outlined"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.links}>
                    <Typography 
                        variant="h2" 
                        sx={{
                            color: palette.primaryColor, 
                            fontSize: 36,
                            "@media screen and (max-width: 750px)": {
                                fontSize: 30
                            }
                        }}
                        className={styles.title}
                    >
                        Links
                    </Typography>
                    <div className={styles.content}>
                        {links.map((link, i) => (
                            <Link key={i} href={link.link}>
                                <Chip 
                                    label={link.name} 
                                    sx={{
                                        color: "#cccccc", 
                                        fontSize: socialMediaFontSize*.7,
                                        border: "#cccccc",
                                        "@media screen and (max-width: 750px)": {
                                            fontSize: 15
                                        }
                                    }}
                                    avatar={link.component}
                                    variant="outlined"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}