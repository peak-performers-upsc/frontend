import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react"

interface ThemeProps {
    children: ReactNode
}

const Theme = ({ children }: ThemeProps) => {
    const theme = createTheme({
        typography: {
            fontFamily: "Barlow Condensed, sans-serif"
        }
    })
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}


export default Theme