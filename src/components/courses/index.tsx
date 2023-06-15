import {
    Typography,
    alpha
} from "@mui/material"
import fastTrackImage from "../../assets/fast-track.svg"
import integratedImage from "../../assets/integrated.svg"
import palette from "../../theme/palette"
import Batch from "../course"
import styles from "./styles.module.scss"

interface BatchesProps {
    className?: string
}

export interface IBatch {
    title: string
    subtitle?: string
    details: string[]
    image: string
    prof: string|string[]
    duration: {
        total: string
        weekly: string
        daily: string
    }
}

const batches: IBatch[] = [
    {
        title: "Fast Track Batch",
        prof: "Bhupender Bhardwaj",
        duration: {
            total: "4 months",
            weekly: "4 days",
            daily: "1 hr"
        },
        image: fastTrackImage,
        details: [
            "Special Notes for 5 subjects would be couriered",
            "Prelims Test Series (3)"
        ]
    },
    {
        title: "Integrated General Studies Online Batch",
        subtitle: "Prelims plus Main Exam integrated",
        prof: ["Bhupender Bhardwaj"],
        duration: {
            total: "11 months",
            weekly: "4 days",
            daily: "1.5 hrs"
        },
        image: integratedImage,
        details: [
            "Incorporates coverage of History, Geog, Polity, Economics, Sci-tech, Culture Environment",
            "Along with Ethics and Essay",
            "Coverage of Books By Amartya Sen, Abhijit Banerjee/Esther Duflo and Ramachandra Guha",
            "Test series (2 rounds) and Newspaper coverage is included",
            "CSAT and Interview Modules excluded"
        ]
    },
    {
        title: "Integrated General Studies Online Batch",
        subtitle: "Prelims plus Main Exam integrated",
        prof: ["Bhupender Bhardwaj"],
        duration: {
            total: "11 months",
            weekly: "4 days",
            daily: "1.5 hrs"
        },
        image: integratedImage,
        details: [
            "Incorporates coverage of History, Geog, Polity, Economics, Sci-tech, Culture Environment",
            "Along with Ethics and Essay",
            "Coverage of Books By Amartya Sen, Abhijit Banerjee/Esther Duflo and Ramachandra Guha",
            "Test series (2 rounds) and Newspaper coverage is included",
            "CSAT and Interview Modules excluded"
        ]
    }
]

export default function Batches({ className }: BatchesProps) {
    return (
        <div className={styles.wrapper} id="courses">
            <div className={`${className?className:""} ${styles.batches_container}`} >
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
                                textTransform: "uppercase",
                                textAlign: "center"
                            }}
                        >
                            Courses
                        </Typography>
                    </div>
                </div>
                <div className={styles.main}>
                    {batches.map((batch, i) => (
                        <Batch key={i} batch={batch} reverse={true} negative={i%3===2} />
                    ))}
                </div>
            </div>
        </div>
    )
}