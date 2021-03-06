import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeProps } from "./theme.types";

const Theme: FC<ThemeProps> = ({ children, colorPrimary = '#ff512f', colorSecondary = '#DD2476' }) => {
    return (
        <ThemeProvider theme={{
            colors: {
                colorPrimary,
                colorSecondary
            }
        }}>
            {children}
        </ThemeProvider>
    )
}

export default Theme