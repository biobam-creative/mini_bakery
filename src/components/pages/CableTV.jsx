import React, { useState, useEffect } from "react";
import header from "../../services/httpServices";
import httpServices from "../../services/httpServices";

import {
  FormBox,
  PageWrapper,
  Title,
  Select,
  StyledButton,
  SectionTitle,
} from "../styledComponents";
import InputField from "../ui/InputField";

export default function CableTV() {
  const [cableProvider, setCableProvider] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [plan, setPlan] = useState("");
  const [planArray, setPlanArray] = useState([]);
  const newPlans = planArray.filter(checkPlan);

  const btnDisabled = cableProvider && cardNumber && plan ? false : true;
  const email = localStorage.getItem("user_email");

  const providerOptions = [
    { value: "", label: "Select Provider" },
    { value: "GOTV", label: "GOTV" },
    { value: "DSTV", label: "DSTV" },
    { value: "Startimes", label: "Startimes" },
  ];

  function checkPlan(plan) {
    return plan.cable_tv_provider === cableProvider;
  }

  async function subscribeToCableTv(e) {
    e.preventDefault();
    let data = {
      email: email,
      amount: plan.price,
      transaction_type: `${plan.cable_tv_provider} Subscription ${plan.name}`,
      number: cardNumber,
    };
    await httpServices.saveTransaction(data).then((res) => {
      console.log(res);
      const { data } = res;
      console.log(data);
      if (data.transaction.is_successful === true) {
        localStorage.setItem("wallet_balance", data.wallet_balance);
        alert("Your subscription is successful sent successfully");
      } else {
        alert("Unable to complete subscription. Your may be balance is low");
      }
    });
  }

  useEffect(() => {
    async function getPlans() {
      const result = await header.header.get(
        `/services/cabletvplan?cable_tv_provider=`
      );
      console.log(result.data.results);
      setPlanArray(result.data.results);
    }

    getPlans();
  }, []);
  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Cable TV Subscription</SectionTitle>
        <form>
          <Select
            value={cableProvider}
            onChange={(e) => setCableProvider(e.target.value)}
            placeholder="Choose Provider"
          >
            {providerOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            value={cardNumber}
            handleChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            type="number"
          />
          {cableProvider ? (
            <Select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              placeholder="Choose plan"
            >
              {newPlans.map((newPlan) => (
                <option
                  value={newPlan}
                  key={newPlan.id}
                >{`${newPlan.cable_tv_provider} ${newPlan.name} ${newPlan.price}`}</option>
              ))}
            </Select>
          ) : null}
          <StyledButton primary disabled={btnDisabled} type="submit">
            Buy Cable Subscription
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
}
