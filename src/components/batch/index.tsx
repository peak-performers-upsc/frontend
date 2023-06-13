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

const Typography = styled(MuiTypography)`
    color: #d6d3d3;
`

const Chip = styled(MuiChip)`
    background-color: ${palette.primaryColor};
    font-size: large;
`

interface BatchProps {
    batch: IBatch
    reverse?: boolean
}

export default function Batch({ batch }: BatchProps) {
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
                    width: "75%",
                    bgcolor: alpha("#1d1d1dfb", 1),
                    borderRadius: "2rem",
                    display: "flex",
                    padding: "0 8rem",
                    alignItems: "center",
                    flexDirection: `row-reverse`,
                    gap: "4rem"
                }}
            >
                <Box width="80%" minHeight="80%">
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5em"
                        }}
                    >
                        <div>
                            <Typography variant="h2">{batch.title}</Typography>
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

                            }}
                        >
                            
                        </div>
                    </CardContent>
                </Box>
                <Box width="20%">
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