import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface IProps {
  placeholder?: string;
  margin?: string;
  handleChange?: (e: ChangeEvent) => void;
}

const StyledInput = styled.input<IProps>`
  width: 100%;
  padding: 8px;
  margin: ${(props) => props.margin && props.margin};
  border-radius: 8px;
  outline: none;
  border: 1px solid #c2c2c2;
`;

const Input: React.FC<IProps> = ({ placeholder, margin, handleChange }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      margin={margin}
      onChange={handleChange}
    />
  );
};

export default Input;