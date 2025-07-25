import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../../services/authService";
import {
  FormBox,
  PageWrapper,
  StyledButton,
  SectionTitle,
  FormTitle,
  Welcome,
} from "../styledComponents";
import InputField from "../ui/InputField";
import { sidebarContext } from "../../store/sidebarContext";
import NameInput from "../ui/signup-steps/NameInput";
import PasswordInput from "../ui/signup-steps/PasswordInput";
import EmailInput from "../ui/signup-steps/EmailInput";
import welcomeImage from "../../static/welcome.svg";
import styled from "styled-components";

export default function SignUp() {
  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");
  let [error, setError] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const completeStep = () => {
    switch (currentStep) {
      case 1:
        return formData.name;
      case 2:
        return formData.email;
      case 3:
        return formData.password && formData.password2;
      default:
        false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let data = {
    //   name: name,
    //   email: email,
    //   password: password,
    //   password2: password2,
    // };
    setLoading(true);
    await signup(formData)
      .then((res) => {
        if (res.status === 201) {
          setLoading(false);
          navigate("/verification", { replace: true });
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  };
  const btnDisabled = email && name && password && password2 ? false : true;

  const renderSignupStep = () => {
    switch (currentStep) {
      case 1:
        return <NameInput formData={formData} handleChange={handleChange} />;
      case 2:
        return <EmailInput formData={formData} handleChange={handleChange} />;
      case 3:
        return (
          <PasswordInput
            formData={formData}
            handleChange={handleChange}
            completed={() => completeStep}
          />
        );
      default:
        return <p>Something went wrong</p>;
    }
  };

  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <FormTitle>Signup</FormTitle>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={welcomeImage}
            style={{
              height: "250px",
            }}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} style={{ flex: "1" }}>
          {renderSignupStep()}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {currentStep < 3 ? (
              <StyledButton
                type="button"
                disabled={!completeStep()}
                onClick={nextStep}
                primary
              >
                Next
              </StyledButton>
            ) : (
              <StyledButton
                disabled={!completeStep()}
                primary
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </StyledButton>
            )}

            {currentStep > 1 ? (
              <StyledButton type="button" onClick={prevStep}>
                Previous
              </StyledButton>
            ) : (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  or
                </div>
                <StyledButton type="button" onClick={() => navigate("/login")}>
                  Login
                </StyledButton>
              </>
            )}
          </div>
        </form>
        {/* <BelowLogin>
          <LinkText to="/login">Already signup? click here to Login</LinkText>
        </BelowLogin> */}
      </FormBox>
    </PageWrapper>
  );
}
