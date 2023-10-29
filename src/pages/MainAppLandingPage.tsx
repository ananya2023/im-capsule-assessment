import React from "react";

import { Box } from "@mui/material";

import { LandingPageItem } from "./LandingPageItem";

const MainAppLandingPage = () => {
  return (
    // Wrapper Container
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        backgroundColor: "white",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LandingPageItem />
      </Box>
    </Box>
  );
};

export default MainAppLandingPage;
