import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormBox,
  PageWrapper,
  Title,
  Select,
  StyledButton,
  SectionTitle,
  InputContainer,
  FormTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";
import ekoElectricityLogo from "../../static/logos/eko-electricity.jpg";
import abujaElectricityLogo from "../../static/logos/abuja-electricity.jpg";
import kanoElectricityLogo from "../../static/logos/kano-electricity.png";
import enuguElectricityLogo from "../../static/logos/enugu-electricity.jpg";
import portHarcourtElectricityLogo from "../../static/logos/port-harcourt-electricity.jpg";
import ibadanElectricityLogo from "../../static/logos/ibadan-electricity.jpg";
import kadunaElectricityLogo from "../../static/logos/kaduna-electricity.jpg";
import josElectricityLogo from "../../static/logos/jos-electricity.jpg";
// import yolaElectricityLogo from "../../static/logos/";
import beninElectricityLogo from "../../static/logos/bedc.jpg";
// import abaElectricityLogo from "../../static/logos/";

const Electricity = () => {
  const [disco, setDisco] = useState();
  const [meterNumber, setMeterNumber] = useState();
  const [meterType, setMeterType] = useState();
  const [amount, setAmount] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState(ekoElectricityLogo);

  const navigate = useNavigate();

  const handleDiscoChange = (selectedDisco) => {
    setDisco(selectedDisco);
    console.log(selectedDisco);
    setImage(""); // Reset image before setting new one
    switch (selectedDisco) {
      case "Eko Electricity":
        setImage(ekoElectricityLogo);
        break;
      case "Abuja Electricity":
        setImage(abujaElectricityLogo);
        break;
      case "Kano Electricity":
        setImage(kanoElectricityLogo);
        break;
      case "Enugu Electricity":
        setImage(enuguElectricityLogo);
        break;
      case "Port Harcourt Electricity":
        setImage(portHarcourtElectricityLogo);
        break;
      case "Ibadan Electricity":
        setImage(ibadanElectricityLogo);
        break;
      case "Kaduna Electricity":
        setImage(kadunaElectricityLogo);
        break;
      case "Jos Electricity":
        setImage(josElectricityLogo);
        break;
      case "Yola Electricity":
        setImage(yolaElectricityLogo);
        break;
      case "Benin Electricity":
        setImage(beninElectricityLogo);
        break;
      case "Aba Electricity":
        setImage(abaElectricityLogo);
        break;
      default:
        setImage(ekoElectricityLogo);
    }
    console.log(image);
  };

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

  async function buyElectricity(e) {
    e.preventDefault();
    const data = {
      transaction_type: `Electricity Purchase from ${disco}`,
      status: "pending",
      disco: disco,
      meter_number: meterNumber,
      meter_type: meterType,
      amount: amount,
      number: phone,
      image: image,
    };
    console.log(data);
    navigate("/transaction-details", { state: data });
  }

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <FormTitle>Electricity</FormTitle>
        <InputContainer>
          <form>
            <Select
              value={disco}
              onChange={(e) => {
                handleDiscoChange(e.target.value);
              }}
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
              id="meter-number"
              label={"Meter Number"}
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
              id="amount"
              label={"Amount"}
              handleChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              type="number"
            />
            <InputField
              value={phone}
              id="phone"
              label={"Phone"}
              handleChange={(e) => setPhone(e.target.value)}
              placeholder="Customer's phone"
              type="text"
            />
            <StyledButton
              primary
              disabled={btnDisabled}
              type="submit"
              onClick={buyElectricity}
            >
              Buy Electricity
            </StyledButton>
          </form>
        </InputContainer>
      </FormBox>
    </PageWrapper>
  );
};

export default Electricity;
