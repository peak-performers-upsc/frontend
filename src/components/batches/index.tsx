import {
    Divider,
    Typography,
    alpha
} from "@mui/material"
import styles from "./styles.module.scss"
import palette from "../../theme/palette"
import fastTrackImage from "../../assets/fast-track.svg"
import integratedImage from "../../assets/integrated.svg"
import Batch from "../batch"

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
    }
]

export default function Batches({ className }: BatchesProps) {
    return (
        <div className={`${className?className:""} ${styles.batches_container}`}>
            <Divider flexItem className={styles.title}>
                <Typography 
                    variant="h1"
                    sx={{
                        borderBottom: `1px solid ${alpha(palette.primaryColor, 0.7)}`,
                        padding: "01rem 35vw",
                        fontSize: 60,
                        textTransform: "uppercase"
                    }}
                >
                    Batches
                </Typography>
            </Divider>
            <div className={styles.main}>
                {batches.map((batch, i) => (
                    <Batch key={i} batch={batch} reverse={true}/>
                ))}
            </div>
        </div>
    )
}