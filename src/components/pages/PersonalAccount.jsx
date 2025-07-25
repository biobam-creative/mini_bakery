import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../styledComponents";
import { FormBox, SectionTitle, StyledButton } from "../styledComponents";
import InputField from "../ui/InputField";
import header from "../../services/httpServices";
import config from "../../config.json";

const PersonalAccount = () => {
  const email = localStorage.getItem("user_email");

  const [nin, setNin] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const btnDisabled = nin && accountName && nin.length === 11 ? false : true;

  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    e.preventDefault();
    let data = {
      email: email,
      nin: nin,
      account_name: accountName,
    };
    await header.header
      .post(`${config.apiUrl}/transactions/personal_account`, data)
      .then((res) => {
        const accounDetails = res.data.responseBody.accounts[0];
        console.log(accounDetails);
        localStorage.setItem("account_number", accounDetails.accountNumber);
        localStorage.setItem("account_name", accounDetails.accountName);
        localStorage.setItem("bank", accounDetails.bankName);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.responseMessage);
      });
  };

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Open Personal Account</SectionTitle>
        <form onSubmit={createAccount}>
          <InputField
            value={nin}
            handleChange={(e) => setNin(e.target.value)}
            placeholder="Enter your NIN"
            type="number"
          />
          <InputField
            value={accountName}
            handleChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter Account Name"
            type="text"
          />
          <StyledButton primary disabled={btnDisabled} type="submit">
            Open Account
          </StyledButton>
        </form>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </FormBox>
    </PageWrapper>
  );
};

export default PersonalAccount;
