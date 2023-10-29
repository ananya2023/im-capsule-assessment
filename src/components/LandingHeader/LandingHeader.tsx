import React from "react";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSnackbar } from "notistack";

import { COLORS } from "../../constants/globalStyles";
import landingIllustartion from "../../assets/trafalgar-header-illustration.png";
import { ImageComponent } from "../ImageComponent";

const LandingHeader = () => {
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: isMediumDeskTopScreen ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isDeskTopScreen
          ? "5rem 8rem"
          : isMediumDeskTopScreen
          ? "4rem"
          : "2.5rem 1.5rem",
        position: "relative",
        gap: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignSelf: "flex-end",
        }}
      >
        <ImageComponent
          containerStyles={{
            position: "absolute",
            left: 0,
            height: "115px",
            marginLeft: "-3.5rem",
            marginTop: "-40rem",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          background: COLORS.BACKGROUND_SURFACE_CLR,
          overflow: "hidden",
          paddingBottom: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "flex-start",
            width: "100%",
            maxWidth: "588px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "100%",
              justifyContent: isDeskTopScreen ? "flex-start" : "center",
              alignItems: isDeskTopScreen ? "flex-start" : "center",
            }}
          >
            <Typography
              sx={{
                color: COLORS.TEXT_DARK_HIGH_CLR,
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "56px",
                textAlign: "center",
              }}
            >
              Virtual healthcare for you
            </Typography>
            <Typography
              sx={{
                fontSize: "21px",
                fontWeight: 300,
                letterSpacing: "1px",
                lineHeight: "2rem",
                color: COLORS.TEXT_DARK_MID_CLR,
                wordBreak: "break-word",
              }}
            >
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: "55px",
                background: COLORS.PRIMARY_BG_CLR,
                color: COLORS.TEXT_LIGHT_CLR,
                fontSize: "18px",
                fontWeight: 700,
              }}
              onClick={() => {
                enqueueSnackbar("Coming soon.!", { variant: "info" });
              }}
            >
              Consult today
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          float: "right",
        }}
      >
        <img
          alt="landingIllustartion"
          src={landingIllustartion}
          style={{
            width: isDeskTopScreen
              ? "693px"
              : isMediumDeskTopScreen
              ? "500px"
              : "312px",
            height: isDeskTopScreen
              ? "600px"
              : isMediumDeskTopScreen
              ? "450px"
              : "290px",
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingHeader;
