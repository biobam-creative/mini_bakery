import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormBox,
  FormTitle,
  InputContainer,
  LogoContainer,
  PageWrapper,
  SectionTitle,
  StyledButton,
  ProviderLogo,
  SectionBox,
} from "../styledComponents";
import InputField from "../ui/InputField";
import mtnLogo from "../../static/logos/mtn_logo.jpg";
import airtelLogo from "../../static/logos/airtel_logo.jpg";
import gloLogo from "../../static/logos/glo_logo.png";
import etisalatLogo from "../../static/logos/9mobile-1.svg";

const CardPrinting = () => {
  const [denomination, setdenomination] = useState(1);
  const [quantity, setQuantity] = useState(null);
  const [name, setName] = useState("");
  const [network, setNetwork] = useState("mtn");
  const [selectedLogo, setSelectedLogo] = useState(mtnLogo);

  const navigate = useNavigate();

  const btnDisabled = quantity && denomination && name ? false : true;
  const email = localStorage.getItem("user_email");

  const amount = denomination * quantity;

  const handleRechargePrinting = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      amount: denomination,
      quantity: quantity,
      transaction_type: `Card printing ${amount} `,
      status: "pending",
      image: mtnLogo,
      network: network,
      number: "",
    };
    console.log(data);
    navigate("/transaction-details", { state: data });
  };

  const handleNetworkClick = (selectedNetwork, image) => {
    setNetwork(selectedNetwork);
    setSelectedLogo(image);
  };

  const denominationVariations = [
    { value: 1, label: "₦100" },
    { value: 2, label: "₦200" },
    { value: 4, label: "₦400" },
    { value: 5, label: "₦500" },
    { value: 10, label: "₦1000" },
  ];

  return (
    <PageWrapper place={"center"}>
      <FormBox width="50%">
        <FormTitle>E-Pin Printing</FormTitle>
        <InputContainer>
          <LogoContainer>
            <ProviderLogo
              onClick={() => handleNetworkClick("mtn", mtnLogo)}
              selected={network === "mtn"}
              src={mtnLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("airtel", airtelLogo)}
              selected={network === "airtel"}
              src={airtelLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("glo", gloLogo)}
              selected={network === "glo"}
              src={gloLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("etisalat", etisalatLogo)}
              selected={network === "etisalat"}
              src={etisalatLogo}
            />
          </LogoContainer>
          <SectionTitle style={{ marginTop: "20px" }}>
            Choose Denomination
          </SectionTitle>
          <div
            style={{
              display: "flex",
              gap: "10px",
              margin: "10px 0 ",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {denominationVariations.map((variation) => (
              <div
                style={{
                  padding: "10px 10px",
                  border: "2px solid #7359c6",
                  cursor: "pointer",
                  fontWeight: variation.value === denomination ? "700" : "400",
                }}
                onClick={() => setdenomination(variation.value)}
              >
                {variation.label}
              </div>
            ))}
          </div>
          <InputField
            placeholder="Quantity"
            id="quantity"
            label={"Quantity"}
            type="number"
            value={quantity}
            handleChange={(e) => setQuantity(e.target.value)}
          />
          <InputField
            placeholder="Name on Card"
            id="name-on-card"
            label={"Name on Card"}
            type="text"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <StyledButton
            onClick={handleRechargePrinting}
            primary
            disabled={btnDisabled}
          >
            Buy Airtime
          </StyledButton>
        </InputContainer>
      </FormBox>
    </PageWrapper>
  );
};

export default CardPrinting;
