import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Typography,
  Box,
  Stack,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { COLORS } from "../constants/globalStyles";
import { ROUTE_HOME } from "../constants/routes";
import { scrollToElement } from "./Utils";

const EmployerTopNavBar = () => {
  const theme: Theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const styles = {
    header: {
      backgroundColor: COLORS.BACKGROUND_SURFACE_CLR,
      color: theme.palette.primary.contrastText,
      padding: isDeskTopScreen ? "1rem  8rem" : "1rem 0.5rem",
      top: 0,
      zIndex: 1005,
      position: "sticky",
    },
    linksContainer: {
      display: "flex",
      alignItems: "center",
      gap: "0.85rem",
    },
    linkItem: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "2rem",
      color: "white",
      textDecoration: "none",
      letterSpacing: "0.75px",
    },
    textStyles: {
      textDecoration: "none",
      color: "var(--1f1534-hyfen, #1F1534)",
      fontSize: "18px",
      fontWeight: 400,
      cursor: "pointer",
    },
  };

  return (
    <Box sx={styles.header}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{
            backgroundColor: "transparent",
            width: "60px",
            padding: "0.67em",
            paddingLeft: "0",
            borderRadius: "11px",
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          {/* Image with Text Container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "0.75rem",
            }}
            onClick={handleDrawerClose}
          >
            <Avatar sx={{ bgcolor: COLORS.PRIMARY_BG_CLR }}>T</Avatar>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                whiteSpace: "nowrap",
                fontSize: "1.5rem",
                fontWeight: 700,
                cursor: "pointer",
                color: COLORS.TEXT_DARK_HIGH_CLR,
              }}
              onClick={() => {}}
            >
              Trafalgar
            </Typography>
          </Box>

          {isDeskTopScreen ? (
            <Box
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "flex-end",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <Link
                to={`/${ROUTE_HOME}`}
                style={styles.textStyles}
                onClick={() => {
                  scrollToElement("home");
                }}
              >
                Home
              </Link>
              <Link
                to={`/${ROUTE_HOME}`}
                style={styles.textStyles}
                onClick={() => {
                  scrollToElement("services");
                }}
              >
                Find a doctor
              </Link>
              <Link
                to={`/${ROUTE_HOME}`}
                style={styles.textStyles}
                onClick={() => {
                  scrollToElement("apps");
                }}
              >
                Apps
              </Link>
              <Link
                to={`/${ROUTE_HOME}`}
                style={styles.textStyles}
                onClick={() => {
                  scrollToElement("testimonials");
                }}
              >
                Testimonials
              </Link>
              <Link
                to={`/${ROUTE_HOME}`}
                style={styles.textStyles}
                onClick={() => {
                  scrollToElement("aboutus");
                }}
              >
                About us
              </Link>
            </Box>
          ) : (
            //  This is the mobile version which needs to have a menu icon
            <Box
              sx={{
                display: "flex",
                flex: 1,
                flexDirection: "row-reverse",
                gap: "1.313rem",
              }}
            >
              <IconButton
                onClick={openDrawer ? handleDrawerClose : handleDrawerOpen}
                sx={{ color: "#000" }}
              >
                {openDrawer ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon sx={{ fontSize: "1.5rem" }} />
                )}
              </IconButton>

              <Drawer
                sx={{
                  "& .MuiDrawer-root": {
                    position: "absolute",
                  },
                  "& .MuiPaper-root": {
                    position: "absolute",
                  },
                  "& .MuiBackdrop-root": {
                    position: "absolute",
                  },
                  paddingTop: "4rem",
                  top: "4rem",
                  position: "absolute",
                }}
                anchor="top"
                open={openDrawer}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      sx={styles.textStyles}
                      onClick={() => {
                        scrollToElement("home");
                      }}
                    >
                      Home
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={styles.textStyles}
                      onClick={() => {
                        scrollToElement("services");
                        setOpenDrawer(true);
                      }}
                      primary="Find a doctor"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={styles.textStyles}
                      onClick={() => {
                        scrollToElement("apps");
                      }}
                      primary="Apps"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={styles.textStyles}
                      onClick={() => {
                        scrollToElement("testimonials");
                      }}
                      primary="Testimonials"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      sx={styles.textStyles}
                      onClick={() => {
                        scrollToElement("aboutus");
                      }}
                      primary="About us"
                    />
                  </ListItem>
                </List>
              </Drawer>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default EmployerTopNavBar;
