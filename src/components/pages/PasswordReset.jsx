import React, { useState, useContext } from "react";

import InputField from "../ui/InputField";
import {
  StyledButton,
  PageWrapper,
  FormBox,
  ErrorMessage,
  FormTitle,
} from "../styledComponents";
import httpServices from "../../services/httpServices";
import config from "../../config.json";

import { useNavigate, Link } from "react-router-dom";
import { SectionTitle } from "../styledComponents";

import { sidebarContext } from "../../store/sidebarContext";

const PasswordReset = () => {
  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const btnDisabled = email ? false : true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email: email };

    setLoading(true);
    await httpServices
      .post(config.apiUrl + "/user/request_Password_change", data)
      .then((response) => {
        navigate("/verification", { replace: true });
      })
      .catch((error) => {
        setError(error.response.data.error);
      });

    setLoading(false);
  };
  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <FormTitle>Password Reset</FormTitle>
        <ErrorMessage>{error}</ErrorMessage>
        <div style={{ flex: "1" }}>
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
        </div>
      </FormBox>
    </PageWrapper>
  );
};

export default PasswordReset;
