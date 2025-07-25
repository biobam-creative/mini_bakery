import React from "react";
import InputField from "../InputField";
import { Select } from "../../styledComponents";

const Identity = ({ formData, handleChange }) => {
  const IdTypeOptions = [
    { label: "Select ID type", value: "" },
    { label: "Permanent Voter's Card", value: "NIGERIAN_PVC" },
    { label: "NIN", value: "NIGERIAN_NIN" },
    { label: "Driver's License", value: "NIGERIAN_DRIVERS_LICENSE" },
    {
      label: "International Passport",
      value: "NIGERIAN_PASSPORT",
    },
  ];
  return (
    <div>
      <Select
        placeholder={"ID Type"}
        type={"text"}
        value={formData.id_type || ""}
        name="id_type"
        onChange={handleChange}
      >
        {IdTypeOptions.map((IdType) => (
          <option key={IdType.value} value={IdType.value}>
            {IdType.label}
          </option>
        ))}
      </Select>
      <InputField
        placeholder={"ID Number"}
        id="id-number"
        label={"Id Number"}
        type={"text"}
        value={formData.id_no || ""}
        name="id_no"
        handleChange={handleChange}
      />
      <InputField
        placeholder={"BVN"}
        id="bvn"
        label={"BVN"}
        type={"text"}
        value={formData.bvn || ""}
        name="bvn"
        handleChange={handleChange}
      />
    </div>
  );
};

export default Identity;
