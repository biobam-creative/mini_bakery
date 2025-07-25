import React from "react";
import InputField from "../InputField";
import { SignUpWelcomeSub, SignUpWelcome } from "../../styledComponents";

const PasswordInput = ({ formData, handleChange }) => {
  return (
    <div>
      <SignUpWelcome>Welcome</SignUpWelcome>
      <SignUpWelcomeSub>
        Keep your account secure, set up your secure password
      </SignUpWelcomeSub>
      <InputField
        placeholder="Password"
        type="password"
        label="password"
        id="password"
        value={formData.password || ""}
        handleChange={handleChange}
        name="password"
        eye
      />
      <InputField
        placeholder="Confirm password"
        type="password"
        label="Confirm password"
        id="password2"
        value={formData.password2 || ""}
        handleChange={handleChange}
        name="password2"
        eye
      />
    </div>
  );
};

export default PasswordInput;
