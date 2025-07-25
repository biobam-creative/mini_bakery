import React, { useEffect, useState } from "react";
import InputField from "../InputField";
import { Select } from "../../styledComponents";

import states from "../../../states.json";
const Address = ({ formData, handleChange, lgas }) => {
  // const [states, setStates]= useState([])
  // const [lgas, setLga] = useState([]);

  useEffect;
  return (
    <div>
      <InputField
        placeholder={"Address"}
        id="address"
        label={"Address"}
        type={"text"}
        value={formData.address || ""}
        handleChange={handleChange}
        name={"address"}
      />
      <Select
        placeholder={"State"}
        type={"text"}
        value={formData.state || ""}
        name="state"
        onChange={handleChange}
      >
        <option value={""}>Select State</option>
        {states.states.map((state) => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </Select>
      <Select
        placeholder={"Local Government"}
        type={"text"}
        value={formData.city || ""}
        name="city"
        onChange={handleChange}
      >
        <option>Select local Government</option>
        {formData.state
          ? lgas.map((lga) => (
              <option key={lga} value={lga}>
                {lga}
              </option>
            ))
          : "Select State first"}
      </Select>

      <InputField
        placeholder={"Country"}
        id="country"
        label={"Country"}
        type={"text"}
        value={formData.country || ""}
        handleChange={handleChange}
        name={"country"}
      />

      <InputField
        placeholder={"House Number"}
        id="house-number"
        label={"House Number"}
        type={"text"}
        value={formData.house_no || ""}
        handleChange={handleChange}
        name={"house_no"}
      />
    </div>
  );
};

export default Address;
