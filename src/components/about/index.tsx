import palette from "../../theme/palette";
import styles from "./styles.module.scss";
import {
    Divider,
    Typography,
    alpha
} from "@mui/material"

export default function About() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about_container}>
                <Divider flexItem className={styles.title}>
                    <Typography 
                        variant="h1"
                        sx={{
                            borderBottom: `1px solid ${alpha(palette.primaryColor, 0.7)}`,
                            padding: "01rem 25vw",
                            fontSize: 60,
                            textTransform: "uppercase"
                        }}
                    >
                        Why??{" "}<span className={styles.subtitle}>Peak Performers</span>
                    </Typography>
                </Divider>
                <div className="main">

                </div>
            </div>
        </div>
    )
}