import {
    Card,
    CardMedia,
    CardContent,
    alpha,
    Box,
    Typography as MuiTypography,
    Chip as MuiChip
} from "@mui/material"
import { IBatch } from "../courses"
import palette from "../../theme/palette"
import styled from "@emotion/styled"
import { Circle as CircleIcon } from '@mui/icons-material';

const Typography = styled(MuiTypography)`
    color: #cccccc;

    @media screen and (max-width: 1150px) {
        font-size: 30px;
    }

    @media screen and (max-width: 1000px) {
        font-size: 25px;
    }

    @media screen and (max-width: 475px) {
        font-size: 25px;
    }
`

const Chip = styled(MuiChip)`
    background-color: ${alpha(palette.primaryColor, 0.85)};
    font-size: 18px;
    font-weight: 500;
    
    .MuiChip-custom {
        font-weight: 500;
        background-color: #262626;
        color: #cccccc;
    }

    @media screen and (max-width: 1150px) {
        font-size: 16px;
    }

    @media screen and (max-width: 1000px) {
        font-size: 14px;
    }

    @media screen and (max-width: 475px) {
        font-size: 12px;
    }
`

const Circle = styled(CircleIcon)`
    color: ${alpha(palette.primaryColor, 0.8)};
    font-size: smaller;
`

interface BatchProps {
    batch: IBatch
    reverse?: boolean
    negative?: boolean
}

export default function Batch({ batch, negative }: BatchProps) {
    return (
        <div 
            style={{ 
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Card 
                sx={{
                    minHeight: 350,
                    width: "70%",
                    bgcolor: negative?alpha(palette.primaryColor, .75):"#1d1d1dfb",
                    borderRadius: "2rem",
                    display: "flex",
                    padding: "0 8rem",
                    alignItems: "center",
                    flexDirection: `row-reverse`,
                    gap: "4rem",
                    color: !negative?palette.primaryColor:"#1d1d1dfb",
                    "@media screen and (max-width: 1350px)": {
                        width: "90%",
                        padding: "0 7rem"
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
                        minHeight:"80%",
                        width: "75%",
                        "@media screen and (max-width: 850px)": {
                            width: "100%",
                            minHeight: "60%"
                        },
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em",
                            color: !negative?palette.primaryColor:"#1d1d1dfb"
                        }}
                    >
                        <div>
                            <Typography 
                                variant="h2"
                                sx={{
                                    ...(negative && { color: "#1d1d1d !important"}),
                                    fontWeight: 500
                                }}
                            >
                                {batch.title}
                            </Typography>
                            {batch.subtitle && (
                                <Typography 
                                    variant="h3" 
                                    sx={{ 
                                        color: `${negative?"#1d1d1dfb":"#cccccc"} !important`,
                                        fontSize: 22,
                                        fontWeight: 500,
                                        "@media screen and (max-width: 1150px)": {
                                            fontSize: "20px !important"
                                        },
                                        "@media screen and (max-width: 1000px)": {
                                            fontSize: "18px !important"
                                        },
                                        "@media screen and (max-width: 475px)": {
                                            fontSize: "16px !important"
                                        },
                                        opacity: .9
                                    }}
                                >
                                    {batch.subtitle}
                                </Typography>
                            )}
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                gap: 8,
                                flexWrap: "wrap",
                                flex: "0 1 auto"
                            }}
                        >
                            <Chip 
                                label={batch.duration.total} 
                                sx={{...(negative && { 
                                    backgroundColor: "#262626 !important",
                                    color: "#cccccc !important"
                                    }
                                )}} 
                            />
                            <Chip 
                                label={`${batch.duration.weekly} per week`} 
                                sx={{...(negative && { 
                                    backgroundColor: "#262626 !important", 
                                    color: "#cccccc !important"}
                                )}} 
                            />
                            <Chip 
                                label={`${batch.duration.daily} per day`} 
                                sx={{...(negative && { 
                                    backgroundColor: "#262626 !important", 
                                    color: "#cccccc !important"}
                                )}} 
                            />
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                paddingTop: "0.8rem",
                                gap: "0.5rem",
                                
                            }}
                        >
                            {batch.details.map((detail, i) => (
                                <div 
                                    style={{ 
                                        display: "flex", 
                                        alignItems: "center", 
                                        gap: ".8rem" 
                                    }}
                                >
                                    <Circle 
                                        sx={{
                                            ...(negative && { color: "#262626 !important"}),
                                        }}
                                    />
                                    <Typography 
                                        variant="h4" 
                                        key={i}
                                        sx={{
                                            ...(negative && { color: "#262626 !important"}),
                                            fontWeight: 430,
                                            "@media screen and (max-width: 1150px)": {
                                                fontSize: "20px !important"
                                            },
                                            "@media screen and (max-width: 1000px)": {
                                                fontSize: "18px !important"
                                            },
                                            "@media screen and (max-width: 475px)": {
                                                fontSize: "16px !important"
                                            },
                                        }}
                                    >
                                        {detail}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Box>
                <Box 
                    width="25%"
                    sx={{
                        "@media screen and (max-width: 850px)": {
                            display: "none"
                        }
                    }}  
                >
                    <CardMedia 
                        component="img"
                        image={batch.image}
                        alt={batch.title}
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
    )
}