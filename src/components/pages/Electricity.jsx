import React, { useState } from "react";
import {
  FormBox,
  PageWrapper,
  Title,
  Select,
  StyledButton,
  SectionTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";

const Electricity = () => {
  const [disco, setDisco] = useState();
  const [meterNumber, setMeterNumber] = useState();
  const [meterType, setMeterType] = useState();
  const [amount, setAmount] = useState();
  const [phone, setPhone] = useState();

  const btnDisabled =
    disco && meterNumber && meterType && amount && phone ? false : true;

  const meterTypeOptions = [
    { value: "", label: "Select meter type" },
    { value: "Prepaid", label: "Prepaid" },
    { value: "Postpaid", label: "Postpaid" },
  ];

  const discoOptions = [
    { value: "", label: "Select Disco" },
    { value: "Eko Electricity", label: "Eko Electricity" },
    { value: "Abuja Electricity", label: "Abuja Electricity" },
    { value: "Kano Electricity", label: "Kano Electricity" },
    { value: "Enugu Electricity", label: "Enugu Electricity" },
    { value: "Port Harcourt Electricity", label: "Port Harcourt Electricity" },
    { value: "Ibadan Electricity", label: "Ibadan Electricity" },
    { value: "Kaduna Electricity", label: "Kaduna Electricity" },
    { value: "Jos Electricity", label: "Jos Electricity" },
    { value: "Yola Electricity", label: "Yola Electricity" },
    { value: "Benin Electricity", label: "Benin Electricity" },
    { value: "Aba Electricity", label: "Aba Electricity" },
  ];

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Electricity</SectionTitle>
        <form>
          <Select
            value={disco}
            onChange={(e) => setDisco(e.target.value)}
            placeholder="Choose Disco"
          >
            {discoOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            value={meterNumber}
            handleChange={(e) => setMeterNumber(e.target.value)}
            placeholder="Enter meter number"
            type="text"
          />
          <Select
            value={meterType}
            onChange={(e) => setMeterType(e.target.value)}
            placeholder="Choose meter Type"
          >
            {meterTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            type="number"
          />
          <InputField
            value={phone}
            handleChange={(e) => setPhone(e.target.value)}
            placeholder="Customer's phone"
            type="text"
          />
          <StyledButton primary disabled={btnDisabled} type="submit">
            Buy Electricity
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default Electricity;
