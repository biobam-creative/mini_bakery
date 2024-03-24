import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  color: ${({ type }) => (type !== "submit" ? "#3f6b42" : "#ffc107")};
  margin: 0.5rem;
  border: none;
  border-bottom: ${({ type }) =>
    type !== "submit" ? "1px solid #3f6b42" : "none"};
  border-radius: ${({ type }) => (type !== "submit" ? "none" : "5px")};
  background-color: ${({ type }) => (type !== "submit" ? "none" : "#3f6b42")};
  height: 25px;
  &:focus {
    outline: none;
    background-color: #ffc107;
  }
`;

const Label = styled.label`
  color: black;
`;

const InputField = ({ placeholder, type, label, id, value, handleChange }) => {
  return (
    <div>
      <div>
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div>
        <Input
          placeholder={placeholder}
          type={type}
          id={id}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputField;
