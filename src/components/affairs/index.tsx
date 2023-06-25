import styles from "./styles.module.scss";
import {
    alpha,
    Typography as MuiTypography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import palette from "../../theme/palette";
import styled from "@emotion/styled";

const Typography = styled(MuiTypography)`
    font-size: 25px;
`

export default function Affairs() {
    const affairs = [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore rerum blanditiis modi eius saepe praesentium placeat quae veritatis, quis fugit exercitationem nisi. Praesentium nobis illo quas quisquam repellendus rem, est nesciunt alias quis aliquid. Ipsum qui, sed reiciendis deserunt ad dicta omnis repellat numquam tempore odit exercitationem mollitia eius ratione.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore rerum blanditiis modi eius saepe praesentium placeat quae veritatis, quis fugit exercitationem nisi. Praesentium nobis illo quas quisquam repellendus rem, est nesciunt alias quis aliquid. Ipsum qui, sed reiciendis deserunt ad dicta omnis repellat numquam tempore odit exercitationem mollitia eius ratione.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore rerum blanditiis modi eius saepe praesentium placeat quae veritatis, quis fugit exercitationem nisi. Praesentium nobis illo quas quisquam repellendus rem, est nesciunt alias quis aliquid. Ipsum qui, sed reiciendis deserunt ad dicta omnis repellat numquam tempore odit exercitationem mollitia eius ratione.",
    ]
    return (
        <div className={styles.wrapper} id="affairs">
            <div className={styles.affairs_container}>
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
                                textAlign: "center"
                            }}
                        >
                            Current Affairs
                        </Typography>
                    </div>
                </div>
                <div className={styles.main}>
                    {affairs.map((affair, i) => (
                        <div
                            style={{ 
                                width: "100%",
                                display: "flex",
                                justifyContent: "center"
                            }}
                            key={i}
                        >
                            <Accordion
                                sx={{
                                    color: "#cccccc",
                                    bgcolor: "#131313",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white"}}/>}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        padding: "0 2rem",
                                        borderTop: "2rem"
                                    }}
                                >
                                    <Typography>{i+1}. {affair.substring(0, 15)}...</Typography>
                                </AccordionSummary>
                                <AccordionDetails 
                                    sx={{ 
                                        bgcolor: "#030303", 
                                        color: "#cccccc", 
                                        fontWeight: 430, 
                                        fontSize: "25px !important",
                                        BorderBottom: "2rem"
                                    }}
                                >
                                    <Typography>
                                        {affair}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    ))}  
                </div>
            </div>
        </div>
    )
}