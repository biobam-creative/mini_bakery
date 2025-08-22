import React, { useState } from "react";
import {
  PageWrapper,
  StyledButton,
  SectionTitle,
  FormBox,
} from "../styledComponents";
import PinInput from "./PinInput";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PinSetup = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleComplete = (enteredPin) => {
    setPin(enteredPin);
    if (pin.length === 4) {
      setBtnDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await httpServices.header
      .post(config.apiUrl + "/user/save_transaction_pin", { pin: pin })
      .then((res) => {
        alert(res.data.success);

        navigate("/dashboard");
      })
      .catch((error) => console.log(error));
  };
  return (
    <PageWrapper place="center">
      <FormBox>
        <SectionTitle>Set your Transaction Pin</SectionTitle>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center", gap: " 10px" }}>
            <PinInput
              type={visible ? "text" : "password"}
              onComplete={handleComplete}
            />
            <div
              style={{ color: "#7359c6", cursor: "pointer" }}
              onClick={() => setVisible(!visible)}
            >
              {visible ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div>{message}</div>
          <StyledButton primary disabled={pin.length !== 4}>
            Save Pin
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default PinSetup;
