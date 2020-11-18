import React from "react";
import styled from "styled-components";

interface IProps {
  size?: string;
  color?: string;
  fontWeight?: string;
  children?: React.ReactNode;
  margin?: string;
}

const StyledLabel = styled.span<IProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  margin: ${(props) => props.margin && props.margin};
`;

const Label: React.FC<IProps> = ({
  size,
  color,
  fontWeight,
  children,
  margin,
}) => {
  return (
    <StyledLabel
      fontWeight={fontWeight}
      className={color}
      size={size}
      margin={margin}
    >
      {children}
    </StyledLabel>
  );
};

export default Label;
