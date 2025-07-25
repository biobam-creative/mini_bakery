import React, { useState, useEffect } from "react";
import header from "../../services/httpServices";
import config from "../../config.json";
import {
  FormBox,
  PageWrapper,
  SectionTitle,
  StyledButton,
  Select,
} from "../styledComponents";
import InputField from "../ui/InputField";

const Transfer = () => {
  const [amount, setAmount] = useState();
  const [beneficiary, setBeneficiary] = useState();
  const [beneficiaryAccountName, setBeneficiaryAccountName] = useState("Taiwo");
  const [beneficiaryBank, setBeneficiaryBank] = useState();

  const [banks, SetBanks] = useState([]);

  const btnDisabled = amount ? false : true;

  useEffect(() => {
    async function getBanks() {
      const result = await header.header.get(`user/dashboard`);
      if (result.data) {
        setTransactions(result.data.transactions);
        setUserInfo(result.data.user);
        setAccountDetails(result.data.account_details);
        setloading(false);
      }
    }

    getBanks();
  }, []);

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Fund Wallet</SectionTitle>
        <form
          onSubmit={() => {
            console.log("submitted");
          }}
        >
          <Select
            value={beneficiaryBank}
            onChange={(e) => setBeneficiaryBank(e.target.value)}
            placeholder="Select Bank"
          >
            {banks.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            value={beneficiary}
            handleChange={(e) => setBeneficiary(e.target.value)}
            placeholder="Beneficiary Account Number"
            type="number"
          />
          {beneficiaryAccountName}
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
};

export default Transfer;
