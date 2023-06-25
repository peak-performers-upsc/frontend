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

const URL = "http://13.233.132.25/api/all/";

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
                                textAlign: "center",
                                "@media screen and (max-width: 750px)": {
                                    fontSize: "40px !important"
                                }
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
                                    minWidth: "90%",
                                    "@media screen and (max-width: 1150px)": {
                                        minWidth: "95%"
                                    },
                                    "@media screen and (max-width: 850px)": {
                                        minWidth: "none",
                                    }
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white"}} fontSize="large"/>}
                                    aria-controls="panel1a-content"
                                    sx={{
                                        padding: "0 2rem",
                                        borderTop: "2rem"
                                    }}
                                >
                                    <Typography 
                                        sx={{
                                            "@media screen and (max-width: 750px)": {
                                                fontSize: 20
                                            }
                                        }}
                                    >
                                        {i+1}. {affair.substring(0, 15)}...
                                    </Typography>
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
                                    <Typography
                                        sx={{
                                            "@media screen and (max-width: 750px)": {
                                                fontSize: 20
                                            }
                                        }}
                                    >
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