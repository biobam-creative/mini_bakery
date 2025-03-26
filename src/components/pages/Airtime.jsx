import React, { useState } from "react";

import httpServices from "../../services/httpServices";
import {
  FormBox,
  PageWrapper,
  Select,
  SectionTitle,
  StyledButton,
} from "../styledComponents";
import InputField from "../ui/InputField";

export default function Airtime() {
  const [network, setNetwork] = useState("");
  const [mobileNumber, setMobileNumber] = useState();
  const [amount, setAmount] = useState();

  const networkOptions = [
    { value: "", label: "Select network" },
    { value: "MTN", label: "MTN" },
    { value: "GLO", label: "GLO" },
    { value: "AIRTEL", label: "AIRTEL" },
    { value: "9MOBILE", label: "9MOBILE" },
  ];

  const btnDisabled =
    network && amount && mobileNumber && mobileNumber.length === 11
      ? false
      : true;
  const email = localStorage.getItem("user_email");

  async function airtimePurchase(e) {
    e.preventDefault();
    let data = {
      email: email,
      amount: amount,
      transaction_type: `${network} ${amount} airtime`,
      number: mobileNumber,
    };
    console.log(data);
    await httpServices.saveTransaction(data).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.transaction.is_successful === true) {
        console.log(data);
        localStorage.setItem("wallet_balance", data.wallet_balance);
        alert("Airtime sent successfully");
      } else {
        alert("Unable to purchase airtime. Your balance maybe low");
      }
    });
  }

  return (
    <PageWrapper place="center">
      <FormBox>
        <SectionTitle>Airtime</SectionTitle>
        <form onSubmit={airtimePurchase}>
          <Select
            value={network}
            onChange={(e) => {
              setNetwork(e.target.value);
            }}
          >
            {networkOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            value={mobileNumber}
            handleChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter Phone number"
            type="text"
          />
          <InputField
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            type="number"
          />
          <StyledButton primary disabled={btnDisabled} type="submit">
            Buy Airtime
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
}
