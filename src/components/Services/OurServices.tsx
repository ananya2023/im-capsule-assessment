import React from "react";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { COLORS } from "../../constants/globalStyles";
import { PROVIDED_SERVICES } from "../../constants/constants";
import { ImageComponent } from "../ImageComponent";
import { IOurServiceItemProps } from "../../interfaces/LandingPage/services.interface";

export const OurServices = () => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="services"
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
      <Typography
        sx={{
          color: COLORS.TEXT_DARK_HIGH_CLR,
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "56px",
        }}
      >
        Our services
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
          color: COLORS.TEXT_DARK_MID_CLR,
          fontSize: "16px",
          fontWeight: 300,
          lineHeight: "28px",
          textAlign: "center",
        }}
      >
        We provide to you the best choices for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </Typography>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="765"
        height="619"
        viewBox="0 0 765 619"
        fill="none"
        style={{ position: "absolute", marginLeft: "-55rem" }}
      >
        <path
          d="M-154.953 141.268C-93.577 70.7806 27.6289 161.97 203.25 122.061C355.359 87.4787 364.11 -4.37809 485.642 0.176955C574.431 3.48723 671.183 54.755 724.356 144.072C782.997 242.551 761.68 342.81 755.696 367.139C728.983 476.263 649.698 533.826 621.728 553.487C506.488 634.44 377.173 620.254 315.136 613.479C82.0999 587.957 -167.386 421.583 -178.495 240.701C-179.971 217.021 -182.658 173.098 -154.953 141.268Z"
          fill="url(#paint0_linear_23_3)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_23_3"
            x1="429.823"
            y1="-145.173"
            x2="195.583"
            y2="560.635"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F3F7FF" />
            <stop offset="1" stop-color="#DEEEFE" />
          </linearGradient>
        </defs>
      </svg>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isDeskTopScreen
            ? "minmax(0, 1fr) minmax(0, 1fr)  minmax(0, 1fr)"
            : "minmax(0, 1fr)",
          gridRow: "auto",
          gridRowGap: "1.25rem",
          gridColumnGap: "5rem",
          backgroundColor: "white",
          padding: "1.5rem 1rem",
        }}
      >
        {PROVIDED_SERVICES?.map((service, i) => {
          return (
            <OurServiceItem
              key={i}
              serviceImage={service.serviceImage}
              serviceTitle={service.serviceTitle}
              serviceDescription={service.serviceDescription}
            />
          );
        })}
      </Box>
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
            marginTop: "-29rem",
            marginRight: "8rem",
          }}
        />
      </Box>
    </Box>
  );
};

// Our Service Item
export const OurServiceItem: React.FC<IOurServiceItemProps> = ({
  serviceImage,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: COLORS.BACKGROUND_SURFACE_CLR,
        padding: "3.5rem 2.5rem",
        borderRadius: "20px",
        boxShadow: "10px 40px 50px 0px rgba(229, 233, 246, 0.40)",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          borderRadius: "0.5rem",
          float: "left",
        }}
      >
        <img
          alt={`${serviceImage}`}
          src={serviceImage}
          style={{ height: "5.3rem" }}
        />
      </Box>

      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.5rem",
          lineHeight: "3.5rem",
          textAlign: "left",
          letterSpacing: "1px",
          color: COLORS.TEXT_DARK_HIGH_CLR,
        }}
      >
        {serviceTitle}
      </Typography>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "1rem",
          lineHeight: "1.75rem",
          textAlign: "left",
          letterSpacing: "0.75px",
          color: COLORS.TEXT_DARK_MID_CLR,
        }}
      >
        {serviceDescription}
      </Typography>
    </Box>
  );
};
