import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    alpha
} from "@mui/material";
import flexibleImage from "../../assets/flexible.svg";
import learningImage from "../../assets/learning.svg";
import personalisationImage from "../../assets/personalisation.svg";
import preparationImage from "../../assets/preparation.svg";
import palette from "../../theme/palette";
import styles from "./styles.module.scss";

interface IAbout {
    title: string
    content: string
    image: string
}

const aboutTiles: IAbout[] = [
    {
        title: "Experienced Faculty and Holistic Learning Approach",
        content: "Peak Performers UPSC Tutorails excels in UPSC coaching, with experienced faculty and high-quality education. Their holistic approach and innovative techniques ensure quick comprehension of concepts.",
        image: learningImage
    },
    {
        title: "Flexible Courses and Comprehensive Materials",
        content: "With flexible online and offline courses, Peak Performers UPSC Tutorials meets the needs of every aspirant. Well-structured materials, exclusive learning modules, and practice tests enhance exam preparation.",
        image: flexibleImage
    },
    {
        title: "Personalized Guidance and Tailored Modules",
        content: "Peak Performers UPSC Tutorials provides comprehensive study materials and personalized guidance. Tailored modules and mentorship from experienced faculty help aspirants build a strong foundation",
        image: personalisationImage
    },
    {
        title: "Unbeatable UPSC Preparation Experience",
        content: "Peak Performers UPSC Institute offers an unbeatable UPSC preparation experience, with a proven track record of success. aspirants can trust in top-notch support, resources, and expertise for their journey.",
        image: preparationImage
    }
]

export default function About() {
    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.about_container}>
                <div className={styles.title_container}>
                    <div 
                        className={styles.title}
                        style={{
                            borderBottom: `1px solid ${alpha(palette.primaryColor, 0.7)}`,
                        }}
                    >
                        <Typography 
                            variant="h1"
                            sx={{
                                fontSize: "55px !important",
                                // textTransform: "uppercase",
                                textAlign: "center",
                                "@media screen and (max-width: 750px)": {
                                    fontSize: "40px !important"
                                }
                            }}
                        >
                           Unveiling the Essence of <span className={styles.subtitle}>Peak Performers </span>
                        </Typography>
                    </div>
                </div>
                <div className={styles.main}>
                    {aboutTiles.map(({ title, content, image }, i) => (
                        <div
                            style={{ 
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                            key={i}
                        >
                            <Card
                                sx={{
                                    minHeight: 400,
                                    width: "70%",
                                    bgcolor: "transparent",
                                    borderRadius: "2rem",
                                    display: "flex",
                                    padding: "0 8rem",
                                    alignItems: "center",
                                    gap: "8rem",
                                    flexDirection: `row${i%2===1?"-reverse":""}`,
                                    border: "none",
                                    justifyContent: "space-between",
                                    "@media screen and (max-width: 1350px)": {
                                        width: "90%",
                                        padding: "0 7rem"
                                    },
                                    "@media screen and (max-width: 1150px)": {
                                        width: "100%"
                                    },
                                    "@media screen and (max-width: 1000px)": {
                                        gap: "4rem"
                                    },
                                    "@media screen and (max-width: 750px)": {
                                        gap: "2rem",
                                        padding: "0 4rem"
                                    },
                                    "@media screen and (max-width: 550px)": {
                                        gap: "2rem"
                                    },
                                }}
                            >
                                <Box 
                                    sx={{
                                        "@media screen and (max-width: 750px)": {
                                            width: "100%"
                                        },
                                        width: "80%"
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            gap: "1rem",
                                            textAlign: "left",
                                            paddingTop: "2rem",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Typography
                                            variant="h1"
                                            sx={{ 
                                                fontSize: 40,
                                                color: palette.primaryColor, 
                                                width: "100%",
                                                "@media screen and (max-width: 1150px)": {
                                                    fontSize: 30
                                                },
                                                "@media screen and (max-width: 1000px)": {
                                                    fontSize: 25
                                                },
                                                "@media screen and (max-width: 475px)": {
                                                    fontSize: 20
                                                }
                                            }}
                                            component="div"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="h1"
                                            sx={{ 
                                                fontSize: 20,
                                                color: "#d6d6d6", 
                                                textAlign:"left",
                                                width: "100%",
                                                "@media screen and (max-width: 1000px)": {
                                                    fontSize: 18
                                                },
                                                "@media screen and (max-width: 750px)": {
                                                    fontWeight: 450
                                                },
                                                "@media screen and (max-width: 475px)": {
                                                    fontSize: 15
                                                }
                                            }}
                                            component="div"
                                        >
                                            {content}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <Box 
                                    width="30%" 
                                    sx={{
                                        "@media screen and (max-width: 750px)": {
                                            display: "none"
                                        }
                                    }}  
                                >
                                    <CardMedia 
                                        component="img"
                                        image={image}
                                        alt={title}
                                        sx={{
                                            // width: "20%",
                                            paddingTop: "2rem",
                                            "@media screen and (max-width: 1350px)": {
                                                width: "100% !important"
                                            }
                                        }}
                                    />
                                </Box>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}