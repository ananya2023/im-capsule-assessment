import React from "react";

import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { COLORS } from "../../constants/globalStyles";
import { ARTICLES } from "../../constants/constants";
import { IArticlesProps } from "../../interfaces/LandingPage/articles.interface";
import { enqueueSnackbar } from "notistack";

export const Articles = () => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
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
      <Typography
        sx={{
          color: COLORS.TEXT_DARK_HIGH_CLR,
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "56px",
          textAlign: "center",
        }}
      >
        Check out our latest article
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

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isDeskTopScreen
            ? "minmax(0, 1fr) minmax(0, 1fr)  minmax(0, 1fr)"
            : isMediumDeskTopScreen
            ? "minmax(0, 1fr) minmax(0, 1fr)  minmax(0, 1fr)"
            : "minmax(0, 1fr)",
          gridRow: "auto",
          gridRowGap: "1.25rem",

          gridColumnGap: "3rem",
          backgroundColor: "white",
          padding: "1.5rem 1rem",
        }}
      >
        {ARTICLES?.map((article, i) => {
          return (
            <ArticleItem
              key={i}
              articleImage={article.articleImage}
              articleTitle={article.articleTitle}
              articleDescription={article.articleDescription}
            />
          );
        })}
      </Box>
      {isDeskTopScreen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="478"
          height="416"
          viewBox="0 0 478 516"
          fill="none"
          style={{ position: "absolute", marginRight: "-70rem" }}
        >
          <path
            d="M766.998 386.364C717.381 446.026 615.061 372.618 470.041 409.048C344.438 440.615 338.903 517.023 237.942 515.53C164.183 514.453 82.9111 473.72 37.095 400.585C-13.4312 319.949 2.37557 236.33 6.88435 216.024C27.003 124.945 91.7284 75.6738 114.575 58.8284C208.703 -10.5331 316.305 -1.19213 367.925 3.26331C561.831 20.0621 772.042 153.461 784.667 303.389C786.338 323.017 789.395 359.423 766.998 386.364Z"
            fill="url(#paint0_linear_58_282)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_58_282"
              x1="287.009"
              y1="635.124"
              x2="468.152"
              y2="44.8754"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F3F7FF" />
              <stop offset="1" stop-color="#DEEEFE" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <Button
        variant="outlined"
        sx={{
          borderRadius: "55px",
          border: "1.4px solid #458FF6",
          color: COLORS.PRIMARY_MAIN_CLR,
          fontSize: "18px",
          fontWeight: 700,
        }}
        onClick={() => {
          enqueueSnackbar("Coming soon.!", { variant: "info" });
        }}
      >
        View all
      </Button>
    </Box>
  );
};

export const ArticleItem: React.FC<IArticlesProps> = ({
  articleImage,
  articleTitle,
  articleDescription,
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
        borderRadius: "20px",
        boxShadow: "10px 40px 50px 0px rgba(229, 233, 246, 0.40)",
        zIndex: 1000,
      }}
    >
      <img
        alt={`${articleImage}`}
        src={articleImage}
        style={{
          height: "10.3rem",
          width: "100%",
          borderRadius: "20px 20px 0 0",
        }}
      />
      <Box
        sx={{
          padding: "1.5rem 2rem",
          float: "left",
        }}
      >
        <Typography
          sx={{
            color: COLORS.TEXT_DARK_HIGH_CLR,
            fontWeight: 700,
            fontSize: "21px",
            textAlign: "left",
            letterSpacing: "1px",
            lineHeight: "2rem",
          }}
        >
          {articleTitle}
        </Typography>
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: "1.75rem",
            textAlign: "left",
            color: COLORS.TEXT_DARK_MID_CLR,
          }}
        >
          {articleDescription}
        </Typography>
        <Button
          sx={{ padding: 0, marginTop: "1.5rem" }}
          endIcon={<ArrowForwardIcon />}
          onClick={() => {
            enqueueSnackbar("Coming soon.!", { variant: "info" });
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};
