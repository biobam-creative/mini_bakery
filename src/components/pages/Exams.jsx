import React, { useState } from "react";
import {
  PageWrapper,
  FormBox,
  Title,
  StyledButton,
  Select,
  SectionTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";

const Exams = () => {
  const [exam, setExam] = useState();
  const [quantity, setQuantity] = useState();
  const [amount, setAmount] = useState();

  const btnDisabled = exam && quantity && amount ? false : true;

  const examOptions = [
    { value: "", label: "Select exam type" },
    { value: "WAEC", label: "WAEC" },
    { value: "NECO", label: "NECO" },
  ];
  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Exam Pin</SectionTitle>
        <form>
          <Select
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            placeholder="Choose Exam"
          >
            {examOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            value={quantity}
            handleChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            type="number"
          />
          <InputField
            value={amount}
            handleChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            type="number"
          />
          <StyledButton primary disabled={btnDisabled} type="submit">
            Generate Pin
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default Exams;
