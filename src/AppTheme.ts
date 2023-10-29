import { createTheme, Theme } from "@mui/material/styles";

export const appTheme: Theme = createTheme({
  typography: {
    fontFamily: "'Mulish', sans-serif;",
  },
  palette: {
    primary: {
      light: "#5472d3",
      main: "#5472d3",
      dark: "#5472d3",
      contrastText: "#fff",
    },
    secondary: {
      light: "#5472d3",
      main: "#0d47a1",
      dark: "#002171",
      contrastText: "#000",
    },
    mode: "light",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});
