import React from "react";

interface IGlobalColors {
  // Base = Default App
  PRIMARY_MAIN_CLR: string;
  // Bg is mostly use to use as highlight or background
  PRIMARY_BG_CLR: string;
  TEXT_DARK_HIGH_CLR: string;
  TEXT_DARK_MID_CLR: string;
  // onColor are very effective for creating contrast for typography on colored backgrounds.
  TEXT_LIGHT_CLR: string;
  BACKGROUND_SURFACE_CLR: string;
}

export const COLORS: IGlobalColors = {
  PRIMARY_MAIN_CLR: "#458FF6",
  PRIMARY_BG_CLR: "#458FF6",
  TEXT_DARK_HIGH_CLR: "#262338",
  TEXT_DARK_MID_CLR: "#7D7987",
  TEXT_LIGHT_CLR: "#FFFFFF",
  BACKGROUND_SURFACE_CLR: "#FFFFFF",
};
