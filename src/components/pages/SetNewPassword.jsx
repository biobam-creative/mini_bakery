import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputField from "../ui/InputField";
import {
  StyledButton,
  SectionTitle,
  FormBox,
  PageWrapper,
} from "../styledComponents";
import header from "../../services/httpServices";
import config from "../../config.json";
import { sidebarContext } from "../../store/sidebarContext";

const SetNewPassword = () => {
  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);

  const { uidb64, token } = useParams();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const btnDisabled = password && password === password2 ? false : true;

  const handleSubmit = async (e) => {
    const data = {
      password: password,
      uidb64: uidb64,
      token: token,
    };
    e.preventDefault();
    console.log("Clicked");
    await header.header
      .patch(`${config.apiUrl}/user/password_reset_complete`, data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/login");
        }
      });
  };

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Set New Password</SectionTitle>
        <form onSubmit={handleSubmit}>
          <InputField
            placeholder="Enter New Password"
            type="password"
            label="Password"
            id="password"
            eye
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <InputField
            placeholder="Confirm New Password"
            type="password"
            label="Confirm Password"
            id="password2"
            eye
            value={password2}
            handleChange={(e) => setPassword2(e.target.value)}
          />
          <StyledButton disabled={btnDisabled} primary>
            Reset Password
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default SetNewPassword;
