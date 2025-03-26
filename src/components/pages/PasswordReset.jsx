import React, { useState } from "react";
import styled from "styled-components";

import InputField from "../ui/InputField";
import { StyledButton, PageWrapper, FormBox } from "../styledComponents";
import httpServices from "../../services/httpServices";
import config from "../../config.json";

import { useNavigate, Link } from "react-router-dom";
import { SectionTitle } from "../styledComponents";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const btnDisabled = email ? false : true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("email", email);
    // console.log(formData);
    const data = { email: email };
    console.log(data);

    setLoading(true);
    const response = await httpServices.header.post(
      config.apiUrl + "/user/request_password_reset",
      data
    );
    if (response.status === 200) {
      navigate("/verification", { replace: true });
    }
    setLoading(false);
  };
  return (
    <PageWrapper>
      <FormBox>
        <SectionTitle>Password Reset</SectionTitle>
        <form onSubmit={handleSubmit}>
          <InputField
            placeholder="Email"
            type="email"
            label="Email"
            id="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <StyledButton disabled={btnDisabled} primary>
            Reset Password
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default PasswordReset;
