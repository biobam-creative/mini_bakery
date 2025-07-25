import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormBox,
  FormTitle,
  InputContainer,
  PageWrapper,
  SectionTitle,
  StyledButton,
} from "../styledComponents";
import InputField from "../ui/InputField";
import mtnLogo from "../../static/logos/mtn_logo.jpg";

const CardPrinting = () => {
  const [denomination, setdenomination] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [name, setName] = useState("");

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
      number: "",
    };
    console.log(data);
    navigate("/transaction-details", { state: data });
  };

  return (
    <PageWrapper place={"center"}>
      <FormBox width="50%">
        <FormTitle>E-Pin Printing</FormTitle>
        <InputContainer>
          <InputField
            type={"number"}
            id="denomination"
            label={"Card Denomination"}
            placeholder={"Card Denomination"}
            value={denomination}
            handleChange={(e) => setdenomination(e.target.value)}
          />
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
