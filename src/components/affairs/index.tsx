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
import axios from "axios";
import useSwr from "swr";

const Typography = styled(MuiTypography)`
    font-size: 25px;
`

interface ResponseType  {
    Content: string
}

const URL = "http://localhost:8000/api/all/";

const getResponse = async (url: string) => (
    await axios.get(url)
    .then(res => res.data as ResponseType[])
    .then(res => res.map(e => e.Content))
    .catch(err => err.response.data)
)



export default function Affairs() {
    const { data: affairs } = useSwr<string[]>(URL, getResponse)

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
                    {affairs?.map((affair, i) => (
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
                                    minWidth: "90%"
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