import palette from "../../theme/palette";
import styles from "./styles.module.scss";
import {
    Divider,
    Typography,
    alpha,
    Card,
    Box,
    CardContent,
    CardMedia,
    Button
} from "@mui/material";
import { ArrowRightAlt } from '@mui/icons-material';
import flexibleImage from "../../assets/flexible.svg";
import learningImage from "../../assets/learning.svg";
import personalisationImage from "../../assets/personalisation.svg";
import preparationImage from "../../assets/preparation.svg";

interface IAbout {
    title: string
    content: string
    image: string
}

const aboutTiles: IAbout[] = [
    {
        title: "Experienced Faculty and Holistic Learning Approach",
        content: "Peak Performers IAS Academy excels in IAS coaching, with experienced faculty and high-quality education. Their holistic approach and innovative techniques ensure quick comprehension of concepts.",
        image: learningImage
    },
    {
        title: "Flexible Courses and Comprehensive Materials",
        content: "With flexible online and offline courses, Peak Performers Coaching meets the needs of every student. Well-structured materials, exclusive learning modules, and practice tests enhance exam preparation.",
        image: flexibleImage
    },
    {
        title: "Personalized Guidance and Tailored Modules",
        content: "Peak Performers IAS Institute provides comprehensive study materials and personalized guidance. Tailored modules and mentorship from experienced faculty help students build a strong foundation",
        image: personalisationImage
    },
    {
        title: "Unbeatable IAS Preparation Experience",
        content: "Peak Performers IAS Institute offers an unbeatable IAS preparation experience, with a proven track record of success. Students can trust in top-notch support, resources, and expertise for their journey.",
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
                                fontSize: 55,
                                // textTransform: "uppercase",
                                textAlign: "center"
                            }}
                        >
                            Why??{" "}<span className={styles.subtitle}>Peak Performers</span>
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
                                    gap: "4rem",
                                    flexDirection: `row${i%2===1?"-reverse":""}`,
                                    border: "none",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box width="80%">
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            gap: "1rem",
                                            textAlign: i%2===1?"right":"left",
                                            paddingTop: "2rem",
                                            justifyContent: "space-between"
                                        }}
                                    >
                                        <Typography
                                            variant="h1"
                                            fontSize={40}
                                            sx={{ color: palette.primaryColor, width: "100%" }}
                                            component="div"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            variant="h1"
                                            fontSize={20}
                                            sx={{ 
                                                color: "#d6d6d6", 
                                                width: "100%",
                                                ...(i%2===1?({paddingLeft: "3rem"}):({paddingRight: "3rem"})) 
                                            }}
                                            component="div"
                                        >
                                            {content}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <Box width="30%">
                                    <CardMedia 
                                        component="img"
                                        image={image}
                                        alt={title}
                                        width={"20%"}
                                        sx={{
                                            paddingTop: "2rem"
                                        }}
                                    />
                                </Box>
                            </Card>
                        </div>
                    ))}
                </div>
                {/* <div className={styles.more}>
                    <div
                        style={{
                            width: "70%",
                            display: "flex",
                            justifyContent: "flex-end",
                            padding: "0 8rem"
                        }}
                    >
                        <Button 
                            type="text" 
                            href="/faq" 
                            sx={{
                                color: palette.primaryColor,
                                borderRadius: "4rem",
                                "&:hover": {
                                    bgcolor: alpha(palette.primaryColor, .05)
                                },
                                padding: "0.5rem 1rem"
                            }}
                        >
                            <Typography variant="h2">Know More</Typography>
                            <ArrowRightAlt sx={{ fontSize: 45 }} />
                        </Button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}