import { createTheme } from "@mantine/core"

export const fetchTheme = () => {
    // TODO: create default theme.
    // TODO: Fetch theme configuration from server that should include colors and font

    const theme = createTheme({
        fontFamily: "Open Sans",
        fontFamilyMonospace: "Open Sans",
        defaultRadius: "0.125rem",
    })

    return theme
}