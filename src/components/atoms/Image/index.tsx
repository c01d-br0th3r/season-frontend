import React from "react";
import styled from "styled-components";

interface IProps {
  radius?: string;
  width?: string;
  height?: string;
  src: string;
  alt: string;
  border?: string;
  margin?: string;
}

const StyledImage = styled.div<IProps>`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  background-image: ${(props) => `url(${props.src})`};
  border-radius: ${(props) => props.radius && props.radius};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) => props.border && props.border};
  margin: ${(props) => props.margin && props.margin};
`;

const Image: React.FC<IProps> = ({
  radius,
  width,
  height,
  src,
  alt,
  border,
  margin,
}) => {
  return (
    <StyledImage
      width={width}
      height={height}
      radius={radius}
      src={src}
      alt={alt}
      border={border}
      margin={margin}
    />
  );
};

export default Image;
