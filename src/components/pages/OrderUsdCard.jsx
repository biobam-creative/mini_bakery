import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [rate, setRate] = useState("");

  const navigate = useNavigate();

  const { state } = useLocation;

  const limitOptions = [
    { label: "5000", value: "500000" },
    { label: "10000", value: "1000000" },
  ];

  useEffect(() => {
    const getRate = async () => {
      httpServices.header.get(config.apiUrl + "/cards/rate").then((res) => {
        console.log(res.data.rate);
        setRate(res.data.rate);
      });
    };
    getRate();
  }, [setRate]);

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
      <FormBox marginTop="4rem">
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
            label="Funding amount (&#36;)"
            value={formData.funding_amount || ""}
            handleChange={handleChange}
            type={"number"}
          />
          <div
            style={{
              margin: "25px 0px",
              color: "#7359c6",
              fontWeight: "bold",
            }}
          >
            Naira = &#8358;
            {formData.funding_amount ? rate * formData.funding_amount : ""}
          </div>

          <div style={{ color: "#7359c6", fontWeight: "bold" }}>
            Fund with a minimum of &#36;
            {!formData.limit ? "" : formData.limit === "500000" ? "3" : "4"}
          </div>
          <PinInput onComplete={handleComplete} />
          <StyledButton
            primary
            disabled={
              (formData.limit = "50000"
                ? formData.funding_amount < 3
                  ? false
                  : true
                : formData.funding_amount < 4
                ? false
                : true)
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
