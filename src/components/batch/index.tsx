
import {
    Card,
    CardMedia,
    CardContent,
    alpha,
    Box,
    Typography as MuiTypography,
    Chip
} from "@mui/material"
import { IBatch } from "../batches"
import palette from "../../theme/palette"
import styled from "@emotion/styled"

const Typography = styled(MuiTypography)`
    color: #d6d3d3;
`

interface BatchProps {
    batch: IBatch
    reverse?: boolean
}

export default function Batch({ batch, reverse }: BatchProps) {
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
                    width: "80%",
                    bgcolor: alpha(palette.bgColor, 0.8),
                    borderRadius: "2rem",
                    display: "flex",
                    padding: "0 8rem",
                    alignItems: "center",
                    flexDirection: `row${reverse && "-reverse"}`,
                    gap: "2rem"
                }}
            >
                <Box width="80%" minHeight="80%">
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <Typography variant="h2">{batch.title}</Typography>
                        {batch.subtitle && (
                            <Typography variant="h3" sx={{ color: "#6e7272 !important"}}>{batch.subtitle}</Typography>
                        )}
                        <div 
                            style={{
                                display: "flex",
                                gap: 8
                            }}
                        >
                            <Chip label={batch.duration.total} />
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