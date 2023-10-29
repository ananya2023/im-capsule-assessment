import React from "react";

import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { HEALTHCARE_PROVIDERS } from "../../constants/constants";
import { COLORS } from "../../constants/globalStyles";
import { ImageComponent } from "../ImageComponent";
import { IHealthCareProviderProps } from "../../interfaces/LandingPage/healthCareProvider.interface";

export const HealthCareProviders = () => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box id="apps">
      <Box
        sx={{
          display: "flex",
          alignSelf: "flex-end",
        }}
      >
        <ImageComponent
          containerStyles={{
            position: "absolute",
            right: 0,
            height: "115px",
            marginLeft: "-5rem",
            float: "right",
            marginTop: "20rem",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isDeskTopScreen
            ? "4rem 9.688rem 4rem 9.688rem"
            : isMediumDeskTopScreen
            ? "4rem"
            : "2.5rem 1.5rem",
        }}
      >
        {HEALTHCARE_PROVIDERS?.map((healthCare, i) => {
          return (
            <HealthCareProviderCard
              key={i}
              icon={healthCare.icon}
              title={healthCare.title}
              subTitle={healthCare.subTitle}
              reverse={i % 2 === 0}
              buttonText={healthCare.buttonText}
              buttonIcon={healthCare.buttonIcon}
            />
          );
        })}
      </Box>
    </Box>
  );
};

// Health Care Provider Card
const HealthCareProviderCard: React.FC<IHealthCareProviderProps> = ({
  title,
  subTitle,
  icon,
  reverse,
  buttonText,
  buttonIcon,
}) => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isDeskTopScreen
          ? reverse
            ? "row-reverse"
            : "row"
          : "column-reverse",
        alignItems: "center",
        justifyContent: "center",
        gap: isDeskTopScreen ? "10rem" : "5rem",
        paddingBottom: "5rem",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: COLORS.BACKGROUND_SURFACE_CLR,
          borderRadius: "0.75rem",
          gap: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: isDeskTopScreen ? "2rem" : "1.25rem",
            lineHeight: isDeskTopScreen ? "2.75rem" : "2rem",
            textAlign: "left",
            letterSpacing: isDeskTopScreen ? "1px" : "0.75px",
            color: COLORS.TEXT_DARK_HIGH_CLR,
          }}
        >
          {title}
        </Typography>
        <Divider
          sx={{
            fontSize: "50px",
            width: "56px",
            fontWeight: "bold",
            margin: "1.5rem 0",
            color: COLORS.TEXT_DARK_MID_CLR,
            borderRadius: "5px",
            background: "#000",
          }}
        />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: isDeskTopScreen ? "1.063rem" : "0.938rem",
            lineHeight: isDeskTopScreen ? "1.75rem" : "1.5rem",
            textAlign: "left",
            letterSpacing: "0.75px",
            color: COLORS.TEXT_DARK_MID_CLR,
          }}
        >
          {subTitle}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "55px",
            border: "1.4px solid #458FF6",
            color: COLORS.PRIMARY_MAIN_CLR,
            fontSize: "18px",
            fontWeight: 700,
          }}
          endIcon={buttonIcon}
        >
          {buttonText}
        </Button>
      </Box>
      <Box sx={{ flex: 1 }}>
        <img
          alt={`${icon}`}
          src={icon}
          style={{ width: isDeskTopScreen ? "28rem" : "20rem" }}
        />
      </Box>
    </Box>
  );
};
