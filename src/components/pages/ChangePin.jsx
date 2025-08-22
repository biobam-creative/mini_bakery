import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  SectionBox,
  FormBox,
  FormTitle,
  StyledButton,
} from "../styledComponents";
import PinInput from "./PinInput";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePin = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [visible, setVisible] = useState(true);

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
        <FormTitle>Enter New Pin</FormTitle>
        <SectionBox>
          <form onSubmit={handleSubmit}>
            <div
              style={{ display: "flex", alignItems: "center", gap: " 10px" }}
            >
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
            <StyledButton primary disabled={btnDisabled}>
              Save Pin
            </StyledButton>
          </form>
        </SectionBox>
      </FormBox>
    </PageWrapper>
  );
};

export default ChangePin;
