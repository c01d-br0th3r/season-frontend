import React from "react";
import styled from "styled-components";
import Label from "../Label";

interface IProps {
  width?: string;
  padding?: string;
  margin?: string;
  color?: string;
  fontSize?: string;
  loading?: boolean;
  handleClick?: () => void;
  children?: React.ReactNode;
}

const StyledButton = styled.button<IProps>`
  padding: ${(props) =>
    props.padding ? `${props.padding}px 16px` : "12px 16px"};
  outline: none;
  border: none;
  border-radius: 8px;
  width: ${(props) => props.width && props.width};
  cursor: pointer;
  margin: ${(props) => props.margin && props.margin};
`;

const Button: React.FC<IProps> = ({
  width,
  padding,
  color,
  fontSize,
  loading,
  handleClick,
  children,
  margin,
}) => {
  return (
    <StyledButton
      onClick={handleClick}
      disabled={loading}
      padding={padding}
      fontSize={fontSize}
      className={color}
      width={width}
      margin={margin}
    >
      <Label>{children}</Label>
    </StyledButton>
  );
};

export default Button;
