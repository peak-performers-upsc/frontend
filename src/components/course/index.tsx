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
`

const Chip = styled(MuiChip)`
    background-color: ${alpha(palette.primaryColor, 0.85)};
    font-size: large;

    .MuiChip-custom {
        background-color: #262626;
        color: #cccccc;
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
    // const prof = (typeof batch.prof === "string"?([batch.prof]):batch.prof)
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
                    color: !negative?palette.primaryColor:"#1d1d1dfb"
                }}
            >
                <Box width="75%" minHeight="80%">
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
                            {/* <div style={{ display: "flex"}}>
                                <Typography 
                                    variant="h2" 
                                    fontSize={25}
                                >
                                    Prof.{" "}
                                    {prof.map((e, i) => (
                                        <span 
                                            style={{ 
                                                color: !negative?palette.primaryColor:"#fff"
                                            }} 
                                            key={i}
                                        >
                                            {e}
                                            {i<prof.length-1 && (
                                                <span style={{ color: "#1d1d1d"}}>{", "}</span>
                                            )}
                                        </span>
                                    ))}
                                </Typography>
                            </div> */}
                            {batch.subtitle && (
                                <Typography 
                                    variant="h3" 
                                    sx={{ 
                                        color: `${negative?"#1d1d1dfb":"#cccccc"} !important`,
                                        fontSize: 22,
                                        fontWeight: 500
                                    }}
                                >
                                    {batch.subtitle}
                                </Typography>
                            )}
                        </div>
                        <div 
                            style={{
                                display: "flex",
                                gap: 8
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
                                <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
                                    <Circle sx={{
                                        ...(negative && { color: "#262626 !important"}),
                                    }}/>
                                    <Typography 
                                        variant="h4" 
                                        key={i}
                                        sx={{
                                            ...(negative && { color: "#262626 !important"}),
                                            fontWeight: 430
                                        }}
                                    >
                                        {detail}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Box>
                <Box width="25%">
                    <CardMedia 
                        component="img"
                        image={batch.image}
                        alt={batch.title}
                        width={"20%"}
                    />
                </Box>
            </Card>
        </div>
    )
}