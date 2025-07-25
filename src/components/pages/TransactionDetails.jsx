import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  FormBox,
  PageWrapper,
  SectionTitle,
  StyledButton,
  TableData,
} from "../styledComponents";
import styled from "styled-components";
import PinInput from "./PinInput";

import httpServices from "../../services/httpServices";
import config from "../../config.json";

const TransactionDetails = () => {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const inputRefs = useRef([]);

  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleComplete = (enteredPin) => {
    setPin(enteredPin);
    if (pin.length === 4) {
      setBtnDisabled(false);
    } else {
      setMessage(`Pin Must be 4 Characters`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ...state, transaction_pin: pin };

    console.log(data);

    await httpServices.header
      .post(`transactions/save_transaction`, data)
      .then((res) => {
        const { data } = res;
        console.log(data);
        if (data.transaction.is_successful === true) {
          localStorage.setItem("wallet_balance", data.wallet_balance);
          alert("Data sent successfully");
        } else {
          alert("Unable to purchase data. Your balance is low");
        }
      })
      .catch((error) => {
        const { data } = error;
        console.log(data);
        if (error.status === 400) {
          alert("Incorrect Pin");
        } else if (error.status === 403) {
          alert("Unable to purchase data. Your balance is low");
        }
      });
  };
  return (
    <PageWrapper place="center">
      <FormBox width="40%">
        <SectionTitle>Transaction Details</SectionTitle>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
            borderBottom: "1px solid #666",
            padding: "0 0 10px 0",
          }}
        >
          <img style={{ height: "50px" }} src={state.image} />
        </div>{" "}
        <table>
          <tr>
            <TableData>
              <DetailsItem>Product </DetailsItem>
            </TableData>
            <TableData>
              <DetailsValue>{state.transaction_type} </DetailsValue>{" "}
            </TableData>
          </tr>
          {state.meter_number && (
            <tr>
              <TableData>
                <DetailsItem>Meter Number</DetailsItem>
              </TableData>
              <TableData>
                <DetailsValue>{state.meter_number}</DetailsValue>
              </TableData>
            </tr>
          )}
          <tr>
            <TableData>
              <DetailsItem>Unit Price</DetailsItem>
            </TableData>
            <TableData>
              <DetailsValue>{state.amount}</DetailsValue>{" "}
            </TableData>
          </tr>
          <tr>
            <TableData>
              <DetailsItem>Quantity </DetailsItem>
            </TableData>
            <TableData>
              <DetailsValue>{state.quantity || 1}</DetailsValue>{" "}
            </TableData>
          </tr>
          <tr>
            <TableData>
              <DetailsItem>Amount Payable </DetailsItem>
            </TableData>
            <TableData>
              <DetailsValue>
                {state.quantity ? state.amount * state.quantity : state.amount}
              </DetailsValue>
            </TableData>
          </tr>
          {/* <tr>
            <TableData>
              <DetailsItem>Transaction ID </DetailsItem>
            </TableData>
            <TableData>
              <DetailsValue>{state.transaction_id || " "}</DetailsValue>
            </TableData>
          </tr> */}
          <tr>
            <TableData>
              <DetailsItem>Number</DetailsItem>
            </TableData>
            <TableData>
              <DetailsValue>{state.number || state.phone || " "}</DetailsValue>
            </TableData>
          </tr>
        </table>
        <div style={pinContainer}>
          <form onSubmit={handleSubmit}>
            {/* <h3>Enter your PIN to confirm purchase</h3> */}
            <p style={{ color: "#000" }}>Enter your PIN to confirm purchase</p>
            <PinInput onComplete={handleComplete} />
            <StyledButton
              primary
              type="submit"
              disabled={isLoading || btnDisabled}
            >
              {isLoading ? "Loading..." : "Buy Now"}
            </StyledButton>
          </form>
          {message && <div style={messageStyle}>{message}</div>}
        </div>
      </FormBox>
    </PageWrapper>
  );
};

const DetailsItem = styled.div`
  margin: 5px;
  font-weight: 600;
  color: #000;
`;

const DetailsValue = styled.div`
  color: #000;
  margin: 5px;
`;

const pinContainer = {
  maxWidth: "300px",
  margin: "0px auto",
  padding: "20px",
  textAlign: "center",
};

const submitButtonStyle = {
  padding: "10px 20px",
  backgroundColor: "#7350c6",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  Cursor: "pointer",
};

const messageStyle = {
  marginTop: "10px",
  color: "#ff0000",
  fontSize: "14px",
};

export default TransactionDetails;
