import React, { useState, useEffect, useContext } from "react";
import {
  FormBox,
  PageWrapper,
  SectionBox,
  StyledButton,
} from "../styledComponents";
import styled from "styled-components";
import {
  createCardHolder,
  getCardHolder,
} from "../../services/bridgeCardServices";
import { useNavigate } from "react-router-dom";
import InputField from "../ui/InputField";
import PersonalInfo from "../ui/form-steps/PersonalInfo";
import Address from "../ui/form-steps/Address";
import Identity from "../ui/form-steps/Identity";
import StepIndicator from "../ui/StepIndicator";
import IdentityUpload from "../ui/form-steps/IdentityUpload";
import states from "../../states.json";
import { pageLoadingContext } from "../../store/PageLoadingContext";
import USDCards from "./USDCards";
import NGNCards from "./NGNCards";

export const Cards = () => {
  const [tab, setTab] = useState("Dollar Card");
  const [cardHolder, setCardHolder] = useState({});
  const [cardHolderId, setCardHolderId] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const [idPreview, setIdPreview] = useState("");

  const [lgas, setLgas] = useState("");

  const { pageLoading, setPageLoading } = useContext(pageLoadingContext);

  const [ngnCards, setNgnCards] = useState([]);

  const [dollarCards, setDollarCards] = useState([]);

  const navigate = useNavigate();

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event) => {
    const { name, value, files, type } = event.target;
    if (name === "state") {
      const state = states.states.find((state) => value === state.name) || "";
      console.log(state);
      const index = states.states.indexOf(state);
      setLgas(states.states[index].lgas);
      setFormData({
        ...formData,
        state: state.name || "",
        postal_code: state.postalCode,
      });
      console.log(formData, state.postalCode);
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
      if (files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          setIdPreview(reader.result);
        };
        reader.readAsDataURL(files[0]);
      } else {
        setIdPreview("");
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    setPageLoading(true);

    await createCardHolder(formData).then((res) => {
      if (res.status === 200) {
        setCardHolder(res.data);
        console.log("Card holder data:", res.data);
        setCardHolderId(res.data.card_holder_id);
        setPageLoading(false);
        navigate("/cardholder-verify");
      } else {
        setPageLoading(false);
        console.error("Error submitting form:", res);
        alert("Error submitting form. Please try again.");
        setCurrentStep(1);
      }
    });

    // Reset to the first step after submission
  };

  const completeStep = () => {
    switch (currentStep) {
      case 1:
        return formData.first_name && formData.last_name && formData.phone;
      case 2:
        return (
          formData.address &&
          formData.state &&
          formData.city &&
          formData.country &&
          formData.house_no
        );
      case 3:
        return formData.id_type && formData.id_no && formData.bvn;
      case 4:
        return formData.id_image;
      default:
        false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <Address
            formData={formData}
            handleChange={handleChange}
            lgas={lgas}
          />
        );
      case 3:
        return (
          <Identity
            formData={formData}
            handleChange={handleChange}
            completed={() => completeStep}
          />
        );
      case 4:
        return (
          <IdentityUpload
            formData={formData}
            handleChange={handleChange}
            idPreview={idPreview}
          />
        );
      default:
        return <p>Something went wrong</p>;
    }
  };

  useEffect(() => {
    const checkCardHolder = async () => {
      await getCardHolder()
        .then((res) => {
          if (res.status === 200) {
            console.log("Card holder data:", res.data);
            setCardHolder({ ...res.data });
            console.log(cardHolder);
            setCardHolderId(res.data.card_holder_id);
          }
        })
        .catch((error) => {
          setPageLoading(false);
        });
    };
    checkCardHolder();
  }, [setCardHolder, setCardHolderId]);

  if (!cardHolder.identity_verification_status === "Success" || !cardHolderId) {
    return (
      <PageWrapper place="center">
        <FormBox width="50%">
          <div style={{ flex: "1" }}>
            <p>
              Please, kindly complete the KYC to be able to process a Card.
              Kindly fill the informations bellow.
            </p>
            <StepIndicator
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              totalSteps={4}
            />
            <form>
              {renderStep()}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {currentStep > 1 ? (
                  <StyledButton type="button" onClick={prevStep}>
                    Previous
                  </StyledButton>
                ) : (
                  <span />
                )}
                {currentStep < 4 ? (
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
                    // style={Buttonstyle}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!completeStep()}
                    primary
                  >
                    Submit
                  </StyledButton>
                )}
              </div>
            </form>
          </div>
        </FormBox>
      </PageWrapper>
    );
  }
  return (
    <PageWrapper place="center">
      <SectionBox style={{ paddingTop: "1.2rem" }}>
        <div
          style={{
            display: "flex",
            height: "30px",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <CardTab
            onClick={() => setTab("Dollar Card")}
            selected={tab === "Dollar Card"}
          >
            USD Cards
          </CardTab>
          <CardTab
            onClick={() => setTab("Naira Card")}
            selected={tab === "Naira Card"}
          >
            NGN Cards
          </CardTab>
        </div>
        <div style={{ width: "100%" }}>
          {tab === "Dollar Card" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <USDCards />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NGNCards />
            </div>
          )}
        </div>
      </SectionBox>
    </PageWrapper>
  );
};

const CardTab = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  cursor: pointer;
  color: #7359c6;
  ${({ selected }) =>
    selected ? `border-bottom: 2px solid #7359c6; font-weight: 600` : ``}
`;

const Buttonstyle = styled.button`
  padding: 5px;
  ${({ disabled }) =>
    disabled
      ? `background:grey; color: #333; `
      : `background:#f0bd2c; color: #f5f5f5;`}
  border-radius: 5px;
  border: none;
`;
