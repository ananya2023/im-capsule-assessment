import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Avatar,
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { COLORS } from "../../constants/globalStyles";
import "./TestimonailCarousel.css";
import {
  IBaseUserInterface,
  IUserInterface,
} from "../../interfaces/user.interface";
import { getTestimonials } from "../../api/tesimonialApi";
import { STATUS_CODES } from "../../constants/constants";
import LoadingSkeletonList from "../Loading/Loading";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

export const TestimonialCarousel = () => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [userTestimonials, setUserTestmonials] = useState<IUserInterface[]>([]);
  const [isTestimonialsLoading, setIsTestimonialsLoading] =
    useState<boolean>(false);

  const getUserTestimonials = async () => {
    setIsTestimonialsLoading(true);
    try {
      const res = await getTestimonials();
      const userResp = res.data as IUserInterface[];
      console.log({ userResp });
      if (res.status === STATUS_CODES.OK) {
        setUserTestmonials(userResp);
      } else {
        console.log("Error in fetching user Details");
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsTestimonialsLoading(false);
    }
  };

  useEffect(() => {
    getUserTestimonials();
  }, []);

  return (
    <Box
      id="testimonials"
      sx={{
        margin: isDeskTopScreen ? "9rem 8rem" : "1rem",
        borderRadius: "24px",
        background: "linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%)",
        display: "flex",
        flexDirection: "column",
        padding: isDeskTopScreen ? "3rem" : "1rem",
      }}
    >
      <Typography
        sx={{
          color: COLORS.TEXT_LIGHT_CLR,
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "48px",
          textAlign: "center",
        }}
      >
        What our customer are saying
      </Typography>
      <Divider
        sx={{
          fontSize: "100px",
          width: "56px",
          fontWeight: "bold",
          margin: "1.5rem 0",
          color: COLORS.TEXT_DARK_MID_CLR,
          borderRadius: "5px",
          background: COLORS.BACKGROUND_SURFACE_CLR,
          alignSelf: "center",
        }}
      />
      {isTestimonialsLoading ? (
        <LoadingSkeletonList
          count={2}
          containerStyles={{
            padding: "2rem 5rem",
          }}
          skeletonStyles={{
            borderRadius: "0.5rem",
            height: "50rem",
          }}
        />
      ) : (
        <div className="gd-carousel-wrapper">
          <Carousel
            arrows={false}
            renderButtonGroupOutside={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            className="gd-carousel"
            customTransition="transform 300ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            centerMode={false}
            slidesToSlide={1}
          >
            {userTestimonials?.map((userItem: IBaseUserInterface, i) => {
              return (
                <CarouselItem
                  key={i}
                  userImage={userItem.avatar}
                  userName={userItem.username}
                  userPosition={userItem.employment.title}
                  userTestimonialText={
                    "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                  }
                />
              );
            })}
          </Carousel>
        </div>
      )}
    </Box>
  );
};

interface IProps {
  userImage: string;
  userName: string;
  userPosition: string;
  userTestimonialText: string;
}

export const CarouselItem: React.FC<IProps> = ({
  userImage,
  userName,
  userPosition,
  userTestimonialText,
}) => {
  const theme = useTheme();
  const isDeskTopScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isDeskTopScreen ? "row" : "column",
        padding: "3.125rem",
        alignItems: "center",
      }}
    >
      <Box sx={{ flex: 0.5 }}>
        <Avatar
          src={userImage}
          style={{
            width: "133px",
            height: "133px",
            flexShrink: 0,
            border: "2px solid #FFFFFF",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flex: 0.5 }}>
        <Typography
          sx={{
            color: COLORS.TEXT_LIGHT_CLR,
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: "48px",
          }}
        >
          ok
          {userName}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "48px",
          }}
        >
          {userPosition}
        </Typography>
      </Box>
      <Typography
        sx={{
          flex: 1,
          color: "rgba(255, 255, 255, 0.90)",
          fontSize: "19px",
          fontWeight: 400,
          lineHeight: "30px",
        }}
      >
        &quot;{userTestimonialText}&quot;
      </Typography>
    </Box>
  );
};
