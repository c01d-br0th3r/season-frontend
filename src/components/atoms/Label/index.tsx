import React from "react";
import styled from "styled-components";

interface IProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  children?: React.ReactNode;
  margin?: string;
  hexColor?: string;
  padding?: string;
  border?: string;
  width?: string;
  id?: string;
}

const StyledLabel = styled.div<IProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  margin: ${(props) => props.margin && props.margin};
  color: ${(props) => props.hexColor && props.hexColor};
  padding: ${(props) => props.padding && props.padding};
  border: ${(props) => props.border && props.border};
  width: ${(props) => props.width && props.width};
`;

const Label: React.FC<IProps> = ({
  size,
  color,
  fontWeight,
  children,
  margin,
  hexColor,
  padding,
  border,
  width,
  id,
}) => {
  return (
    <StyledLabel
      fontWeight={fontWeight}
      className={color}
      size={size}
      margin={margin}
      hexColor={hexColor}
      padding={padding}
      border={border}
      width={width}
      id={id}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;
