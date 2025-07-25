import React from "react";
import {
  FormBox,
  PageWrapper,
  StyledButton,
} from "../../components/styledComponents";
import InputField from "../../components/ui/InputField";
import httpServices from "../../services/httpServices";
import { useParams, useNavigate } from "react-router-dom";

const FundUSDCard = () => {
  const [formData, setFormData] = React.useState({});

  const { cardId } = useParams();

  const navigate = useNavigate();

  // Handle input changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send formData to your backend API
    httpServices.header
      .post(`/cards/fund_card/${cardId}`, formData)
      .then((response) => {
        console.log(response.data.status);
        if (response.status === 200) {
          alert("Card funding in progress!");
          navigate("/cards");
        }
      })
      .catch((error) => {
        alert("Failed to fund card: " + error.response.data.message);
      });
  };
  return (
    <PageWrapper place="center">
      <FormBox>
        <form onSubmit={handleSubmit}>
          <InputField
            name={"amount"}
            id={"amount"}
            placeholder={"Amount"}
            label={"Amount"}
            value={formData.amount || ""}
            handleChange={handleChange}
            type={"number"}
          />
          <StyledButton primary type="submit">
            Fund Card
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
};

export default FundUSDCard;
