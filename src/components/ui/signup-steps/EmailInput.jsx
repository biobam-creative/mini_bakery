import React from "react";
import InputField from "../InputField";
import { SignUpWelcome, SignUpWelcomeSub } from "../../styledComponents";

const EmailInput = ({ formData, handleChange }) => {
  return (
    <div>
      <SignUpWelcome>Welcome</SignUpWelcome>
      <SignUpWelcomeSub>
        We love to make your account unique, please enter your e-mail address.
      </SignUpWelcomeSub>
      <InputField
        placeholder="Email"
        type="email"
        label="Email"
        id="email"
        value={formData.email || ""}
        handleChange={handleChange}
        name="email"
      />
    </div>
  );
};

export default EmailInput;
