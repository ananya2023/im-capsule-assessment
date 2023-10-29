import React from "react";

import LandingElement from "../assets/bgelements/element.svg";

interface IImageComponentProps {
  containerStyles?: React.CSSProperties | undefined;
}

export const ImageComponent: React.FC<IImageComponentProps> = ({
  containerStyles,
}) => {
  return (
    <img
      style={{
        ...containerStyles,
      }}
      src={LandingElement}
      alt={`${LandingElement}`}
    />
  );
};
