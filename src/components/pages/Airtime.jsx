import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import httpServices from "../../services/httpServices";
import {
  FormBox,
  PageWrapper,
  InputContainer,
  StyledButton,
  LogoContainer,
  ProviderLogo,
  FormTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";

import mtnLogo from "../../static/logos/mtn_logo.jpg";
import airtelLogo from "../../static/logos/airtel_logo.jpg";
import gloLogo from "../../static/logos/glo_logo.png";
import _9m0bileLogo from "../../static/logos/9mobile-1.svg";

export default function Airtime() {
  const [network, setNetwork] = useState("MTN");
  const [mobileNumber, setMobileNumber] = useState();
  const [amount, setAmount] = useState();
  const [selectedLogo, setSelectedLogo] = useState(mtnLogo);
  const navigate = useNavigate();

  const btnDisabled = network && amount && mobileNumber ? false : true;
  const email = localStorage.getItem("user_email");

  async function airtimePurchase(e) {
    e.preventDefault();
    let data = {
      email: email,
      amount: amount,
      transaction_type: `${network} ${amount} airtime`,
      number: mobileNumber,
      status: "pending",
      serviceID: network.toLowerCase(),
      request_id: Date.now().toString(),
      image: selectedLogo,
    };
    console.log(data);
    navigate("/transaction-details", { state: data });
  }

  const handleNetworkClick = (selectedNetwork, image) => {
    setNetwork(selectedNetwork);
    setSelectedLogo(image);
  };

  return (
    <PageWrapper place="center">
      <FormBox width="50%">
        <FormTitle>Airtime Purchase</FormTitle>
        <InputContainer>
          <LogoContainer>
            <ProviderLogo
              onClick={() => handleNetworkClick("MTN", mtnLogo)}
              selected={network === "MTN"}
              src={mtnLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("AIRTEL", airtelLogo)}
              selected={network === "AIRTEL"}
              src={airtelLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("GLO", gloLogo)}
              selected={network === "GLO"}
              src={gloLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("ETISALAT", _9m0bileLogo)}
              selected={network === "ETISALAT"}
              src={_9m0bileLogo}
            />
          </LogoContainer>

          <InputField
            placeholder="Phone Number"
            id="phone-number"
            label={"Phone Number"}
            type="tel"
            value={mobileNumber}
            handleChange={(e) => setMobileNumber(e.target.value)}
          />
          <InputField
            placeholder="Amount"
            id="amount"
            label={"Amount"}
            type="number"
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
          />
          <StyledButton
            onClick={airtimePurchase}
            primary
            disabled={btnDisabled}
          >
            Buy Airtime
          </StyledButton>
        </InputContainer>
      </FormBox>
    </PageWrapper>
  );
}
