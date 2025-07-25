import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  FormBox,
  Title,
  StyledButton,
  Select,
  SectionTitle,
  FormTitle,
  InputContainer,
  LogoContainer,
  ProviderLogo,
} from "../styledComponents";
import InputField from "../ui/InputField";
import waecLogo from "../../static/logos/waec.png";
import necoLogo from "../../static/logos/neco-logo.df6f9256.png";
import jambLogo from "../../static/logos/JAMB-LOGO.jpg";

const Exams = () => {
  const [exam, setExam] = useState("WAEC");
  const [quantity, setQuantity] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState();
  const [selectedLogo, setSelectedLogo] = useState();

  const navigate = useNavigate();

  const btnDisabled = exam && quantity && amount ? false : true;

  const handleExanClick = (selectedExam, image) => {
    setExam(selectedExam);
    setSelectedLogo(image);
  };

  const handleTokenPurchase = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      amount: amount,
      exam: exam,
      quantity: quantity,
      transaction_type: `Exam Token ${exam} ${amount} `,
      status: "pending",
      image: selectedLogo,
      number: "",
    };
    console.log(data);
    navigate("/transaction-details", { state: data });
  };

  const examOptions = [
    { value: "", label: "Select exam type" },
    { value: "WAEC", label: "WAEC" },
    { value: "NECO", label: "NECO" },
  ];
  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <FormTitle>Examination Pin</FormTitle>
        <InputContainer>
          <LogoContainer>
            <ProviderLogo
              onClick={() => handleExanClick("WAEC", waecLogo)}
              selected={exam === "WAEC"}
              src={waecLogo}
            />
            <ProviderLogo
              onClick={() => handleExanClick("NECO", necoLogo)}
              selected={exam === "NECO"}
              src={necoLogo}
            />
            <ProviderLogo
              onClick={() => handleExanClick("JAMB", jambLogo)}
              selected={exam === "JAMB"}
              src={jambLogo}
            />
          </LogoContainer>
          <form>
            {/* <Select
              value={exam}
              onChange={(e) => setExam(e.target.value)}
              placeholder="Choose Exam"
            >
              {examOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select> */}
            <InputField
              value={quantity}
              id="quantity"
              label={"Quantity"}
              handleChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              type="number"
            />
            <InputField
              value={amount}
              id="amount"
              label={"Amount"}
              handleChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              type="number"
            />
            <StyledButton
              onClick={handleTokenPurchase}
              primary
              disabled={btnDisabled}
              type="submit"
            >
              Generate Pin
            </StyledButton>
          </form>
        </InputContainer>
      </FormBox>
    </PageWrapper>
  );
};

export default Exams;
