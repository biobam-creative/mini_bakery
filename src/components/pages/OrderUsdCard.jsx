import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  StyledButton,
  FormBox,
  Select,
} from "../styledComponents";
import InputField from "../ui/InputField";
import PinInput from "./PinInput";
import httpServices from "../../services/httpServices";
import config from "../../config.json";

const OrderUsdCard = () => {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const limitOptions = [
    { label: "5000", value: "500000" },
    { label: "10000", value: "1000000" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleComplete = (enteredPin) => {
    setFormData({ ...formData, ["pin"]: enteredPin });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await httpServices.header
      .post(config.apiUrl + "/cards/dollar_card", formData)
      .then((response) => {
        console.log(response.data.status);
        if (response.status === 200) {
          alert("Card ordered successfully!");
          navigate("/cards");
        } else {
          alert("Failed to order card: " + response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error ordering card:", error);
        if (error.code == "ECONNABORTED") {
          alert("Connection Timeout");
        } else {
          alert("Failed to order card: " + response.data.message);
        }
      });
  };
  return (
    <PageWrapper place="center">
      <FormBox>
        <form onSubmit={handleSubmit}>
          <Select
            value={formData.limit || ""}
            name="limit"
            onChange={handleChange}
          >
            <option value="">Select card limit</option>
            {limitOptions.map((option) => (
              <option value={option.value}>&#36;{option.label}</option>
            ))}
          </Select>
          <InputField
            id="funding-amount"
            name={"funding_amount"}
            placeholder={"Funding amount"}
            label={"Funding amount"}
            value={formData.funding_amount || ""}
            handleChange={handleChange}
            type={"number"}
          />
          <p>
            Fund with a minimum of &#36;
            {!formData.limit ? "" : formData.limit === "500000" ? "3" : "4"}
          </p>
          <PinInput onComplete={handleComplete} />
          <StyledButton
            primary
            disabled={
              !formData.limit && !formData.funding_amount && formData.pin != 4
            }
          >
            Order Card
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default OrderUsdCard;
