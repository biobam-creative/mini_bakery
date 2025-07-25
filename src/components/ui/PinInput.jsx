import React, { useState, useRef } from "react";
import { FormBox, PageWrapper } from "../styledComponents";

import config from "../../config.json";
import httpservice from "../../services/httpServices";

const PinInput = ({ purchase }) => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pin.some((digit) => digit === "")) {
      alert("Please fill all the digits");
      return;
    }

    const pinString = pin.join("");
    setIsLoading(true);
    setMessage("");

    const data = { pin: pinString };

    await httpservice.header
      .post(`${config.apiUrl}/user/save_transaction_pin`, data)
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          alert("Transaction PIN saved successfully");
        } else {
          alert("Failed to save Transaction PIN");
        }
      })
      .catch((error) => {
        console.error("Error saving transaction PIN:", error);
        alert("An error occurred while saving the Transaction PIN");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <div style={pinContainer}>
        <form onSubmit={handleSubmit}>
          {/* <h3>Enter your PIN to confirm purchase</h3> */}
          <p style={{ color: "#002073" }}>
            {purchase
              ? "Enter your PIN to confirm purchase"
              : "Enter your 4-digit pin to Save"}
          </p>
          <div style={pinInputs}>
            {pin.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength="1"
                ref={(el) => (inputRefs.current[index] = el)}
                style={pinDigitStyle}
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
              />
            ))}
          </div>
          <button type="submit" style={submitButtonStyle} disabled={isLoading}>
            {isLoading ? "Processing..." : purchase ? "Buy Now" : "Save"}
          </button>
        </form>
        {message && <div style={messageStyle}>{message}</div>}
      </div>
    </div>
  );
};

const pinContainer = {
  maxWidth: "300px",
  margin: "0px auto",
  padding: "20px",
  textAlign: "center",
};

const pinInputs = {
  display: "flex",
  justifyContent: "space-between",
  margin: "20px 0",
};

const pinDigitStyle = {
  width: "30px",
  height: "30px",
  fontSize: "14px",
  textAlign: "center",
  borderRadius: "5px",
  border: "2px solid #002073",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#002073",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  Cursor: "pointer",
};

const messageStyle = {
  marginTop: "10px",
  color: "#ff0000",
  fontSize: "14px",
};

export default PinInput;
