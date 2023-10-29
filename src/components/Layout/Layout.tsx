import React from "react";
import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import { ICustomStyles } from "../../interfaces/Styles.interface";
import { LandingFooter } from "../LandingFooter/LandingFooter";
import TopNavBar from "../TopNavBar";

const Layout = () => {
  const classes: ICustomStyles = {
    appWrapper: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#F5F5F5",
      minHeight: "100vh",
    },
    mainContainer: {
      width: "100%",
      backgroundColor: "inherit",
      flex: 1,
    },
  };

  return (
    <Box
      sx={{
        ...classes.appWrapper,
      }}
    >
      {/* App Header / Top Nav Bar */}
      <TopNavBar />

      {/* Children Components */}
      <Box
        sx={{
          ...classes.mainContainer,
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <LandingFooter />
    </Box>
  );
};

export default React.memo(Layout);
