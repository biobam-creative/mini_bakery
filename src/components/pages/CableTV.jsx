import React, { useState, useEffect } from "react";
import header from "../../services/httpServices";
import httpServices from "../../services/httpServices";

import dstvLogo from "../../static/logos/dstv_logo.png";
import startimesLogo from "../../static/logos/startimes_logo.png";
import gotvLogo from "../../static/logos/gotv_logo.png";

import {
  FormBox,
  PageWrapper,
  LogoContainer,
  ProviderLogo,
  PlanCard,
  PlanBottom,
  PlanProvider,
  PlanPrice,
  PlanValue,
  StyledButton,
  SectionTitle,
  FormTitle,
  InputContainer,
} from "../styledComponents";
import InputField from "../ui/InputField";
import { useNavigate } from "react-router-dom";

export default function CableTV() {
  const [cableProvider, setCableProvider] = useState("GOTV");
  const [cardNumber, setCardNumber] = useState("");
  const [planId, setPlanId] = useState(null);
  const [plans, setPlans] = useState([]);

  const [subscriber, setSubscriber] = useState("");

  const navigate = useNavigate();

  const filteredPlans = plans.filter((plan) => {
    return plan.cable_tv_provider === cableProvider;
  });

  const btnDisabled =
    cableProvider && cardNumber.length === 10 && planId ? false : true;
  const email = localStorage.getItem("user_email");

  function checkPlan(plan) {
    return plan.cable_tv_provider === cableProvider;
  }

  const getSubscriber = () => {
    // console.log(cardNumber.length);
  };

  async function subscribeToCableTv(e) {
    e.preventDefault();
    const selectedPlan = plans.filter((plan) => {
      return plan.id == Number(planId);
    })[0];
    let data = {
      email: email,
      amount: selectedPlan.price,
      transaction_type: `${selectedPlan.cable_tv_provider} Subscription ${selectedPlan.name}`,
      number: cardNumber,
      status: "pending",
    };
    console.log(data);
    navigate("/transaction-details", { state: data });
    // await httpServices.header
    //   .post(`transactions/save_transaction`, data)
    //   .then((res) => {
    //     const { data } = res;
    //     if (data.transaction.is_successful === true) {
    //       localStorage.setItem("wallet_balance", data.wallet_balance);
    //       alert("Your subscription is successful sent successfully");
    //     } else {
    //       alert("Unable to complete subscription. Your may be balance is low");
    //     }
    //   });
  }

  const handleProviderClick = (provider) => {
    setPlanId(null);
    setCableProvider(provider);
  };

  useEffect(() => {
    async function getPlans() {
      const result = await header.header.get(
        `/services/cabletvplan?cable_tv_provider=`
      );
      setPlans(result.data.results);
    }

    getPlans();
  }, [setCableProvider, setSubscriber, setCardNumber]);

  const handleCardNumberChange = (number) => {
    setCardNumber(number);

    if (number.length === 10) {
      // "make api call to get subscriber"
      setSubscriber("Afolabi Emmanuel");
    } else {
      setSubscriber(null);
    }
  };

  return (
    <PageWrapper place="center">
      <FormBox width="50%">
        <FormTitle>Cable Tv Subscription</FormTitle>
        <InputContainer>
          <form>
            <LogoContainer>
              <ProviderLogo
                onClick={() => {
                  handleProviderClick("GOTV");
                }}
                selected={cableProvider === "GOTV"}
                src={gotvLogo}
              />
              <ProviderLogo
                onClick={() => {
                  handleProviderClick("DSTV");
                }}
                selected={cableProvider === "DSTV"}
                src={dstvLogo}
              />
              <ProviderLogo
                onClick={() => {
                  handleProviderClick("STARTIMES");
                }}
                selected={cableProvider === "STARTIMES"}
                src={startimesLogo}
              />
            </LogoContainer>
            <InputField
              placeholder="Number"
              id="card-number"
              label={"Card Number"}
              type="number"
              value={cardNumber}
              handleChange={(e) => handleCardNumberChange(e.target.value)}
            />
            {subscriber ? (
              <div
                style={{
                  fontSize: "14px",
                  color: "#002063",
                  display: "flex",
                  width: "100%",
                  justifyContent: "flex-end",
                }}
              >
                {subscriber}
              </div>
            ) : null}

            <div
              style={{
                margin: "10px 0 10px 0",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {filteredPlans.map((plan) => (
                <PlanCard
                  selected={planId == plan.id}
                  onClick={() => {
                    setPlanId(plan.id);
                  }}
                  key={plan.id}
                >
                  <PlanProvider>{plan.cable_tv_provider}</PlanProvider>
                  <PlanValue>{plan.name}</PlanValue>
                  <PlanPrice>
                    &#8358;{`${Number(plan.price).toLocaleString()}`}
                  </PlanPrice>
                </PlanCard>
              ))}
            </div>
            <StyledButton
              primary
              disabled={btnDisabled}
              onClick={subscribeToCableTv}
            >
              Subscribe
            </StyledButton>
          </form>
        </InputContainer>
      </FormBox>
    </PageWrapper>
  );
}
