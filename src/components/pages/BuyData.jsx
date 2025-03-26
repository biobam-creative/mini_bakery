import React, { useState, useEffect } from "react";
import httpServices from "../../services/httpServices";
import {
  FormBox,
  PageWrapper,
  Select,
  SectionTitle,
  StyledButton,
} from "../styledComponents";
import InputField from "../ui/InputField";

export default function BuyData() {
  const [network, setNetwork] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [planId, setPlanId] = useState();
  const [planArray, setPlanArray] = useState([]);

  const planList = [{ data_cap: "Select plan", network: "", price: "" }].concat(
    planArray.filter(checkPlan)
  );

  const networkOptions = [
    { value: "", label: "Select network" },
    { value: "MTN", label: "MTN" },
    { value: "GLO", label: "GLO" },
    { value: "AIRTEL", label: "AIRTEL" },
    { value: "9MOBILE", label: "9MOBILE" },
  ];

  const btnDisabled =
    network && mobileNumber && planId && mobileNumber.length === 11
      ? false
      : true;
  const email = localStorage.getItem("user_email");

  function checkPlan(plan) {
    return plan.network === network;
  }

  const purchasePlan = (plan) => {
    return plan.id == Number(planId);
  };

  async function dataPurchase(e) {
    e.preventDefault();
    const selectedPlan = planArray.filter(purchasePlan)[0];
    let data = {
      email: email,
      amount: selectedPlan.price,
      transaction_type: `${selectedPlan.network} Data ${selectedPlan.data_cap}`,
      number: mobileNumber,
      status: "pending",
    };
    console.log(data);
    await httpServices.header
      .post(`transactions/save_transaction`, data)
      .then((res) => {
        console.log(res);
        const { data } = res;
        console.log(data);
        if (data.transaction.is_successful === true) {
          localStorage.setItem("wallet_balance", data.wallet_balance);
          alert("Data sent successfully");
        } else {
          alert("Unable to purchase data. Your balance is low");
        }
      });
  }

  useEffect(() => {
    async function getPlans() {
      const result = await httpServices.header.get(
        `/services/mobiledataplan?network=`
      );
      setPlanArray(result.data.results);
    }

    getPlans();
  }, []);
  return (
    <PageWrapper place={"center"}>
      <FormBox width="40%">
        <SectionTitle>Buy Data</SectionTitle>
        <form onSubmit={dataPurchase}>
          <Select
            value={network}
            onChange={(e) => {
              setNetwork(e.target.value);
            }}
          >
            {networkOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <InputField
            placeholder="Phone Number"
            type="text"
            value={mobileNumber}
            handleChange={(e) => setMobileNumber(e.target.value)}
          />
          <Select
            required
            value={planId}
            onChange={(e) => {
              setPlanId(e.target.value);
            }}
          >
            {planList.map((plan) => (
              <option value={plan.id} key={plan.id}>
                {`${plan.network} ${plan.data_cap} ${plan.price}`}
              </option>
            ))}
          </Select>
          <StyledButton primary disabled={btnDisabled} type={"submit"}>
            Buy Data Now
          </StyledButton>
        </form>
      </FormBox>
    </PageWrapper>
  );
}
