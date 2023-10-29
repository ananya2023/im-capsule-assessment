import React from "react";
import { Box } from "@mui/material";

import LandingHeader from "../components/LandingHeader/LandingHeader";
import { OurServices } from "../components/Services/OurServices";
import { HealthCareProviders } from "../components/Services/HealthCareProviders";
import { Articles } from "../components/Articles/Articles";
import { TestimonialCarousel } from "../components/Testimonials/TestimonialCarousel";

export const LandingPageItem = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <LandingHeader />
      <OurServices />
      <HealthCareProviders />
      <TestimonialCarousel />
      <Articles />
    </Box>
  );
};
