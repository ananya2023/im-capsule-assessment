import React from "react";

import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { COLORS } from "../../constants/globalStyles";
import { FOOTER_LIST } from "../../constants/constants";
import { ImageComponent } from "../ImageComponent";
import { ILandingFooterProps } from "../../interfaces/LandingPage/footer.interface";

export const LandingFooter = () => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box id="aboutus" sx={{ backgroundColor: COLORS.BACKGROUND_SURFACE_CLR }}>
        <ImageComponent
          containerStyles={{
            bottom: 0,
            height: "115px",
            float: "right",
            marginRight: "5.5rem",
            marginBottom: "-2.5rem",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isDeskTopScreen ? "row" : "column",
            padding: isDeskTopScreen ? "7rem 155px" : "1rem",
            background:
              "linear-gradient(183deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
            width: "100%",
            gap: isDeskTopScreen ? "2rem" : "1rem",
          }}
        >
          <Box sx={{ flex: 2.5, display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "1rem",
                width: "100%",
                maxWidth: "270px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: COLORS.BACKGROUND_SURFACE_CLR,
                    color: COLORS.PRIMARY_MAIN_CLR,
                  }}
                >
                  T
                </Avatar>
                <Typography
                  sx={{
                    verticalAlign: "middle",
                    color: COLORS.TEXT_LIGHT_CLR,
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  Trafalgar
                </Typography>
              </Box>

              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  fontWeight: 300,
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  wordBreak: "break-word",
                  color: COLORS.TEXT_LIGHT_CLR,
                }}
              >
                Trafalgar provides progressive, and affordable healthcare,
                accessible on mobile and online for everyone
              </Typography>
              <Typography
                sx={{
                  textAlign: "left",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: "1.75rem",
                  wordBreak: "break-word",
                  color: COLORS.TEXT_LIGHT_CLR,
                }}
              >
                ©Trafalgar PTY LTD 2020. All rights reserved
              </Typography>
            </Box>
          </Box>

          {FOOTER_LIST.map((footer, i) => {
            return (
              <FooterCard
                key={i}
                title={footer.title}
                footerNavList={footer.footerNavList}
              />
            );
          })}
        </Box>
        <ImageComponent
          containerStyles={{
            float: "left",
            bottom: 0,
            height: "115px",
            marginTop: "-8rem",
            marginLeft: "-1.5rem",
          }}
        />
      </Box>
    </>
  );
};

export const FooterCard: React.FC<ILandingFooterProps> = ({
  title,
  footerNavList,
}) => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: isDeskTopScreen ? "0.5rem" : "0.5rem",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          color: COLORS.TEXT_LIGHT_CLR,
        }}
      >
        {title}
      </Typography>

      {footerNavList.map((item, i) => {
        return (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                cursor: "pointer",
                color: COLORS.TEXT_LIGHT_CLR,
              }}
              onClick={() => {
                item.onClickHandler();
              }}
            >
              {item.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
