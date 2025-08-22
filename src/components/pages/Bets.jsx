import React, { useState } from "react";
import {
  FormBox,
  FormTitle,
  InputContainer,
  PageWrapper,
  Select,
} from "../styledComponents";
import InputField from "../ui/InputField";

const Bets = () => {
  const [amount, setAmount] = useState(0);
  const [userId, setUserId] = useState("");
  const [company, setCompany] = useState("");
  return (
    <PageWrapper>
      <FormBox>
        <FormTitle>Fund Bet Wallet</FormTitle>;
        <InputContainer>
          <Select></Select>
          <InputField
            type={"number"}
            id="userId"
            label={"User ID"}
            placeholder={"Enter User ID"}
            value={userId}
            handleChange={(e) => setUserId(e.target.value)}
          />
          <InputField
            type={"number"}
            id="amount"
            label={"Amount"}
            placeholder={"Amount"}
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
          />
        </InputContainer>
      </FormBox>
    </PageWrapper>
  );
};

export default Bets;
