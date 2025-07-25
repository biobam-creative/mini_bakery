import React, { useState } from "react";
import { BsEye } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

const Input = styled.input`
  // display: flex;
  color: #7359c6;
  margin: 0.5rem;
  ${({ border }) =>
    border === "full"
      ? ``
      : border === "bottom"
      ? `border: none; border-bottom:1px solid #7359c6;`
      : `border:none; background-color: rgb(211,211,211);`}
  width: 100%;
  &:focus {
    outline: none;
    background-color: rgb(211, 211, 211);
  }
  &:hover {
    opacity: ${({ type }) => (type === "submit" ? 0.7 : 1)};
  }
`;

const InputOut = styled.div`
  display: flex;
  align-items: center;
`;

const EyeIcon = styled.div`
  color: #7359c6;
  cursor: Pointer;
  margin: 0 10px 0 0;
`;

const InputField = ({
  name,
  placeholder,
  type,
  value,
  handleChange,
  eye,
  border,
  label,
  id,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const handleEyeClick = (e) => {
    setHidePassword(!hidePassword);
  };
  return (
    <>
      {label ? (
        <label style={{ margin: "100px 0 0 0", color: "#7359c6" }} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(211,211,211)",
          margin: "10px 0 10px 0",
          padding: "1px",
          borderRadius: "15px",
          width: "100%",
        }}
      >
        <Input
          placeholder={placeholder}
          type={eye ? (hidePassword ? "password" : "text") : type}
          value={value}
          onChange={handleChange}
          border={border}
          name={name}
          accept={type === "file" ? "image/*" : undefined}
        />
        {eye ? (
          hidePassword ? (
            <EyeIcon>
              <FaEye onClick={handleEyeClick} />
            </EyeIcon>
          ) : (
            <EyeIcon>
              <FaEyeSlash onClick={handleEyeClick} />
            </EyeIcon>
          )
        ) : null}
      </div>
      {/* // </InputOut> */}
    </>
  );
};

export default InputField;
