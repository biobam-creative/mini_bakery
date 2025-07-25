import React from "react";
import InputField from "../InputField";

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <InputField
        placeholder={"First Name"}
        id="first-name"
        label={"First Name"}
        type={"text"}
        value={formData.first_name || ""}
        handleChange={handleChange}
        name="first_name"
      />
      <InputField
        placeholder={"Last Name"}
        id="last-name"
        label={"Last Name"}
        type={"text"}
        value={formData.last_name || ""}
        handleChange={handleChange}
        name="last_name"
      />
      <InputField
        placeholder={"Phone"}
        id="phone"
        label={"Phone"}
        type={"tel"}
        value={formData.phone || ""}
        handleChange={handleChange}
        name="phone"
      />
    </div>
  );
};

export default PersonalInfo;
