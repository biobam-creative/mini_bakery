import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  color: #3f6b42;
  margin: 0.5rem;
  border: none;
  border-bottom: ${({ type }) =>
    type !== "submit" ? "2px solid #3f6b42" : "none"};
  border-radius: ${({ type }) => (type !== "submit" ? "none" : "5px")};
  background-color: ${({ type }) => (type !== "submit" ? "none" : "#ffc107")};
  height: 35px;
  width: 100%;
  font-weight: ${({ type }) => (type === "submit" ? "bold" : "")};
  cursor: ${({ type }) => (type === "submit" ? "pointer" : "")};
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: ${({ type }) => (type === "submit" ? 0.7 : 1)};
  }
`;

const Label = styled.label`
  margin: 0.5rem;
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
