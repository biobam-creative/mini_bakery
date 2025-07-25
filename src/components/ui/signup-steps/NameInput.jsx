import React from "react";
import InputField from "../InputField";
import { SignUpWelcome, SignUpWelcomeSub } from "../../styledComponents";

const NameInput = ({ formData, handleChange }) => {
  return (
    <div>
      <SignUpWelcome>Welcome</SignUpWelcome>
      <SignUpWelcomeSub>What will like us to call you.</SignUpWelcomeSub>
      <InputField
        autoFocus
        placeholder="Name"
        type="text"
        label="Name"
        id="name"
        value={formData.name || ""}
        handleChange={handleChange}
        name="name"
      />
    </div>
  );
};

export default NameInput;
