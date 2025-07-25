import React, { useState, useEffect } from "react";
import httpServices from "../../services/httpServices";
import mtnLogo from "../../static/logos/mtn_logo.jpg";
import airtelLogo from "../../static/logos/airtel_logo.jpg";
import gloLogo from "../../static/logos/glo_logo.png";
import _9mobileLogo from "../../static/logos/9mobile-1.svg";
import {
  PlanBottom,
  FormBox,
  PageWrapper,
  PlanTop,
  FormTitle,
  StyledButton,
  LogoContainer,
  ProviderLogo,
  FilterButton,
  FilterGroup,
  PlanCard,
  PlanProvider,
  PlanValue,
  PlanPrice,
  SectionBox,
  InputContainer,
} from "../styledComponents";
import InputField from "../ui/InputField";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BuyData() {
  const [network, setNetwork] = useState("MTN");
  const [mobileNumber, setMobileNumber] = useState("");
  const [planId, setPlanId] = useState(null);
  const [plans, setPlans] = useState([]);
  const [filterButton, setFilterButton] = useState("all");
  const [selectedLogo, setSelectedLogo] = useState(mtnLogo);

  const navigate = useNavigate();

  const filterdPlan = plans
    .filter((plan) => {
      return plan.network === network;
    })
    .filter((plan) => {
      if (filterButton === "all") return true;
      if (filterButton === "daily") return Number(plan.validity) >= 6;
      if (filterButton === "weekly") return plan.validity == "7";
      if (filterButton === "monthly") return plan.validity == "30";
    });

  const handleNetworkClick = (selectedNetwork, image) => {
    setPlanId(null);
    setNetwork(selectedNetwork);
    setSelectedLogo(image);
  };
  const btnDisabled =
    network && mobileNumber && planId && mobileNumber.length === 11
      ? false
      : true;
  const email = localStorage.getItem("user_email");

  const purchasePlan = (plan) => {
    return plan.id == Number(planId);
  };

  async function dataPurchase(e) {
    e.preventDefault();
    const selectedPlan = plans.filter(purchasePlan)[0];
    let data = {
      email: email,
      amount: selectedPlan.price,
      transaction_type: `${selectedPlan.network} Data ${selectedPlan.data_cap}`,
      number: mobileNumber,
      status: "pending",
      image: selectedLogo,
    };

    navigate("/transaction-details", { state: data });

    // await httpServices.header
    //   .post(`transactions/save_transaction`, data)
    //   .then((res) => {
    //     console.log(res);
    //     const { data } = res;
    //     console.log(data);
    //     if (data.transaction.is_successful === true) {
    //       localStorage.setItem("wallet_balance", data.wallet_balance);
    //       alert("Data sent successfully");
    //     } else {
    //       alert("Unable to purchase data. Your balance is low");
    //     }
    //   });
  }

  useEffect(() => {
    async function getPlans() {
      const result = await httpServices.header.get(
        `/services/mobiledataplan?network=`
      );
      setPlans(result.data.results);
    }

    getPlans();
  }, [setNetwork]);
  return (
    <PageWrapper place={"center"}>
      <SectionBox width="50%" height="100%">
        <FormTitle>Buy Data</FormTitle>
        <InputContainer>
          <LogoContainer>
            <ProviderLogo
              onClick={() => handleNetworkClick("MTN", mtnLogo)}
              selected={network === "MTN"}
              src={mtnLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("AIRTEL", airtelLogo)}
              selected={network === "AIRTEL"}
              src={airtelLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("GLO", gloLogo)}
              selected={network === "GLO"}
              src={gloLogo}
            />
            <ProviderLogo
              onClick={() => handleNetworkClick("9MOBILE", _9mobileLogo)}
              selected={network === "9MOBILE"}
              src={_9mobileLogo}
            />
          </LogoContainer>

          <InputField
            placeholder="Phone Number"
            id="phone-number"
            label={"Phone Number"}
            type="tel"
            value={mobileNumber}
            handleChange={(e) => setMobileNumber(e.target.value)}
            maxLenght="11"
          />
          <FilterGroup>
            <FilterButton
              onClick={() => setFilterButton("all")}
              isSelected={filterButton === "all"}
            >
              All
            </FilterButton>
            <FilterButton
              onClick={() => setFilterButton("daily")}
              isSelected={filterButton === "daily"}
            >
              Daily
            </FilterButton>
            <FilterButton
              onClick={() => setFilterButton("weekly")}
              isSelected={filterButton === "weekly"}
            >
              Weekly
            </FilterButton>
            <FilterButton
              onClick={() => setFilterButton("monthly")}
              isSelected={filterButton === "monthly"}
            >
              Monthly
            </FilterButton>
          </FilterGroup>
          <div
            style={{
              margin: "10px 0 10px 0",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            {filterdPlan.map((plan) => (
              <PlanCard
                selected={planId === plan.id}
                onClick={() => setPlanId(plan.id)}
                key={plan.id}
              >
                <PlanTop>
                  <PlanProvider>{plan.network}</PlanProvider>
                  <PlanValue>{plan.data_cap}</PlanValue>
                  <PlanPrice>
                    &#8358;{`${Number(plan.price).toLocaleString()}`}
                  </PlanPrice>
                </PlanTop>
                <PlanBottom>{plan._type}</PlanBottom>
              </PlanCard>
            ))}
          </div>
          <StyledButton primary disabled={btnDisabled} onClick={dataPurchase}>
            Continue
          </StyledButton>
        </InputContainer>
      </SectionBox>
    </PageWrapper>
  );
}
