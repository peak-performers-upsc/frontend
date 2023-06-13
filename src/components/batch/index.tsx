import {
    Card,
    CardMedia,
    CardContent,
    alpha,
    Box,
    Typography as MuiTypography,
    Chip as MuiChip
} from "@mui/material"
import { IBatch } from "../batches"
import palette from "../../theme/palette"
import styled from "@emotion/styled"
import { Circle as CircleIcon } from '@mui/icons-material';

const Typography = styled(MuiTypography)`
    color: #d6d3d3;
`

const Chip = styled(MuiChip)`
    background-color: ${alpha(palette.primaryColor, 0.85)};
    font-size: large;
`

const Circle = styled(CircleIcon)`
    color: ${alpha(palette.primaryColor, 0.8)};
    font-size: smaller;
`

interface BatchProps {
    batch: IBatch
    reverse?: boolean
}

export default function Batch({ batch }: BatchProps) {
    const prof = (typeof batch.prof === "string"?([batch.prof]):batch.prof)
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
                    bgcolor: alpha("#1d1d1dfb", 1),
                    borderRadius: "2rem",
                    display: "flex",
                    padding: "0 8rem",
                    alignItems: "center",
                    flexDirection: `row-reverse`,
                    gap: "4rem"
                }}
            >
                <Box width="75%" minHeight="80%">
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em"
                        }}
                    >
                        <div>
                            <Typography variant="h2">{batch.title}</Typography>
                            <div style={{ display: "flex"}}>
                                <Typography 
                                    variant="h2" 
                                    fontSize={25}
                                >
                                    Prof.{" "}
                                    {prof.map((e, i) => (
                                        <span 
                                            style={{ 
                                                color: alpha(palette.primaryColor, 0.85)
                                            }} 
                                            key={i}
                                        >
                                            {e}
                                            {i<prof.length-1 && (
                                                <span style={{ color: "#d6d6d6"}}>{", "}</span>
                                            )}
                                        </span>
                                    ))}
                                </Typography>
                            </div>
                            {batch.subtitle && (
                                <Typography 
                                    variant="h3" 
                                    sx={{ 
                                        color: "#6e7272 !important",
                                        fontSize: 22
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
                            <Chip label={batch.duration.total} />
                            <Chip label={`${batch.duration.weekly} per week`} />
                            <Chip label={`${batch.duration.daily} per day`} />
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
                                    <Circle />
                                    <Typography variant="h4" key={i}>{detail}</Typography>
                                </div>
                            ))}
                        </div>
                        {/* <div>
                            <Typography variant="h3" gutterBottom>By: {batch.prof}</Typography>
                        </div> */}
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