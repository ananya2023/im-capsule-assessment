import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { appTheme } from "./AppTheme";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />

      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Router>
          <AppRoutes />
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
