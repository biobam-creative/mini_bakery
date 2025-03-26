import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import header from "../../services/httpServices";
import config from "../../config.json";
import {
  FormBox,
  PageWrapper,
  SectionTitle,
  StyledButton,
} from "../styledComponents";
import InputField from "../ui/InputField";

export default function FundWallet() {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  //   const amount = 1000000; // Remember, set in kobo!
  let name = localStorage.getItem("user_name");
  let email = localStorage.getItem("user_email");
  const [amount, setAmount] = useState();

  const btnDisabled = amount ? false : true;

  async function transact() {}

  const fundWallet = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      amount: amount,
      transaction_type: "Fund Wallet",
    };
    await header.header
      .post(`${config.apiUrl}/transactions/paystack_intialize`, data)
      .then((res) => {
        const resp_data = res.data.data;
        console.log(resp_data);
        const paystack = new PaystackPop();
        paystack.resumeTransaction(resp_data.access_code);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PageWrapper place="center">
      <FormBox>
        <SectionTitle>Fund Wallet</SectionTitle>
        <form onSubmit={fundWallet}>
          <InputField
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            type="number"
          />
          <StyledButton primary disabled={btnDisabled} type="submit">
            Fund Wallet
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
}
