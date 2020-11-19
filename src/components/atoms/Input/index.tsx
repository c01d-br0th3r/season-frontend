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
  outline: none;
  border: none;
  border-bottom: 1px solid #d2d2d2;
  &:focus {
    border: none;
    outline: 2px solid #de8a9a;
  }
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
