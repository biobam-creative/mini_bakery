import React, { useState, useEffect } from "react";
import PaystackPop from "@paystack/inline-js";
import header from "../../services/httpServices";
import config from "../../config.json";
import {
  FormBox,
  GroupButton,
  LinkText,
  PageWrapper,
  WalletCard,
  SectionTitle,
  StyledButton,
  SectionBox,
} from "../styledComponents";
import InputField from "../ui/InputField";
import httpServices from "../../services/httpServices";
import { useNavigate } from "react-router-dom";
import CopyToClipboard from "../../services/CopyToClipboard";

export default function FundWallet() {
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  //   const amount = 1000000; // Remember, set in kobo!
  let name = localStorage.getItem("user_name");
  let email = localStorage.getItem("user_email");
  const [amount, setAmount] = useState();
  const [accountDetails, setAccountDetails] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("paystack");

  const navigate = useNavigate();

  const btnDisabled = amount ? false : true;

  useEffect(() => {
    // setUserInfo({ email: email, name: name, wallet_balance: wallet_balance });
    async function getData() {
      const result = await httpServices.header.get(
        "transactions/personal_account"
      );
      if (result.data) {
        console.log(result.data);

        setAccountDetails(result.data);
      }
    }
    getData();
  }, [setAccountDetails]);

  const fundWallet = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      amount: amount,
      transaction_type: "Fund Wallet",
    };
    await header.header
      .post(`${config.apiUrl}/transactions/paystack_intialize`, data)
      .then((res) => {
        const resp_data = res.data.data;
        console.log(resp_data);
        const paystack = new PaystackPop();
        paystack.resumeTransaction(resp_data.access_code);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMethodClick = (payment) => {
    setPaymentMethod(payment);
  };

  return (
    <PageWrapper place="center" direction="column">
      <SectionBox width="50%">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <GroupButton
            placeButton="left"
            selected={paymentMethod === "paystack"}
            type="button"
            onClick={() => handleMethodClick("paystack")}
          >
            Fund with paystack
          </GroupButton>
          <GroupButton
            placeButton="right"
            selected={paymentMethod === "direct"}
            type="button"
            onClick={() => handleMethodClick("direct")}
          >
            Fund with bank transfer
          </GroupButton>
        </div>
        {paymentMethod === "paystack" ? (
          <div>
            {/* <SectionTitle>Fund Wallet with gateway</SectionTitle> */}
            <form style={{ marginTop: "20px" }} onSubmit={fundWallet}>
              <InputField
                value={amount}
                handleChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                type="number"
              />
              <StyledButton primary disabled={btnDisabled} type="submit">
                Fund Wallet
              </StyledButton>
            </form>
          </div>
        ) : (
          <div>
            {accountDetails.length !== 0 ? (
              <div>
                <div style={{ color: "red", marginBottom: "10px" }}>
                  For direct funding make a transfer to any of these account
                  Numbers{" "}
                </div>
                {accountDetails.map((accountDetail) => (
                  <div>
                    <WalletCard style={{ margin: "10px" }}>
                      <div>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          Account Number:
                        </span>{" "}
                        {accountDetail.account_number}{" "}
                        <CopyToClipboard text={accountDetail.account_number} />
                      </div>
                      <div>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          Account Name:
                        </span>{" "}
                        {accountDetail.account_name}
                      </div>

                      <div style={{ marginBottom: "30px" }}>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          Bank:
                        </span>{" "}
                        {accountDetail.bank}
                      </div>
                    </WalletCard>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <SectionTitle
                  style={{ color: "#7359c6", cursor: "pointer" }}
                  color="#f0bd2c"
                  onClick={() => navigate("/personal-account")}
                >
                  Click to create an account for direct funding
                </SectionTitle>
              </div>
            )}
          </div>
        )}
      </SectionBox>
    </PageWrapper>
  );
}
