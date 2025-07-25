import React, { useRef, useState, useEffect } from "react";

const PinInput = ({
  length = 4,
  onComplete,
  autoFocus = true,
  type = "text",
  validate = (value) => /^\d$/.test(value),
  placeholder = "",
}) => {
  const [values, setValues] = useState(["", "", "", ""]);

  // const [values, setValues] = useState(Array(length).fill(""));

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const focusInput = (index) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  const handleChange = (index, value) => {
    // if (!validate(value)) return;
    const newValues = [...values];
    if (validate) {
      newValues[index] = value;
      setValues(newValues);
    }

    if (newValues.every((v) => v !== "") && onComplete) {
      onComplete(newValues.join(""));
    }
    if (value && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      // inputRefs.current[index - 1].focus();
      focusInput(index - 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, length);
    if (!validate(pasteData)) {
      return;
    }
    const newValues = [...values];
    for (let i = 0; i < pasteData.length; i++) {
      if (i < length) {
        newValues[i] = pasteData[i];
      }
    }
    setValues(newValues);
    const lastFilledIndex = newValues.findIndex((v) => v === "");
    const focusIndex =
      lastFilledIndex === -1
        ? length - 1
        : Math.min(lastFilledIndex - 1, length - 1);
    focusInput(focusIndex);
  };

  return (
    <div style={pinInputs}>
      {values.map((digit, index) => (
        <input
          key={index}
          type={type}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          maxLength="1"
          ref={(el) => (inputRefs.current[index] = el)}
          style={pinDigitStyle}
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
          placeholder={placeholder}
        />
      ))}
    </div>
  );
};

export default PinInput;

const pinInputs = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  margin: "20px 0",
};

const pinDigitStyle = {
  width: "30px",
  height: "30px",
  fontSize: "14px",
  textAlign: "center",
  borderRadius: "5px",
  border: "2px solid #333",
};
