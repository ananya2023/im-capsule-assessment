import React, { useState } from "react";
import { Avatar, Box, Skeleton } from "@mui/material";

interface ILoadingSkeletonListProps {
  count: number;
  animation?: false | "pulse" | "wave" | undefined;
  containerStyles?: React.CSSProperties;
  skeletonStyles?: React.CSSProperties;
}

const LoadingSkeletonList: React.FC<ILoadingSkeletonListProps> = ({
  animation,
  containerStyles,
  skeletonStyles,
  count,
}) => {
  const [skeletonCount, setSkeletonCount] = useState<number>(count);
  const [skeletonHeight, setSkeletonHeight] = useState<number>(50);
  const [skeletonGap, setSkeletonGap] = useState<number>(1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: skeletonGap,
        width: "100%",
        ...containerStyles,
      }}
    >
      <Skeleton
        variant="circular"
        height={50}
        width={100}
        animation={animation}
      >
        <Avatar />
      </Skeleton>

      {new Array(skeletonCount).fill(0)?.map((val, ind) => {
        return (
          <Skeleton
            key={ind}
            variant={"rectangular"}
            width="100%"
            height={skeletonHeight}
            animation={animation}
            sx={{
              ...skeletonStyles,
            }}
          />
        );
      })}
    </Box>
  );
};

export default LoadingSkeletonList;
