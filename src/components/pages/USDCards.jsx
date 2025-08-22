import React, { useState, useEffect } from "react";
import { SectionBox, StyledButton } from "../../components/styledComponents";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import httpServices from "../../services/httpServices";
import config from "../../config.json";
import logo from "../../static/logos/logowhite.png";
import NGFlag from "../../static/Flag_of_Nigeria.webp";
import USFlag from "../../static/Flag_of_the_United_States_(Web_Colors).png";
import {
  FaArrowRight,
  FaPlusCircle,
  FaPlus,
  FaMinus,
  FaPause,
  FaTrashAlt,
} from "react-icons/fa";
import mastercardLogo from "../../static/logos/Mastercard.svg";
import axios from "axios";
import _ from "lodash";
import CardSlides from "../ui/CardSlides";
import QuickLink from "./QuickLink";

import CopyToClipboard from "../../services/CopyToClipboard.jsx";

const USDCards = () => {
  const [dollarCards, setDollarCards] = useState([]);
  const [rate, setRate] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardDetails, setCardDetails] = useState(null);

  const navigate = useNavigate();

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setCardDetails(null);
  };

  const viewCardDetails = async (card_id) => {
    if (cardDetails && cardDetails.card_id === card_id) {
      setCardDetails(null);
      return;
    }
    httpServices.header
      .get(`${config.apiUrl}/cards/dollar_cards_details/${card_id}`)
      .then((response) => {
        setCardDetails(response.data.data);
        console.log(response.data.data);
        console.log(cardDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCardDetails = (card_id) => {
    const cardDetails = cardsDetails.find(
      (details) => details.card_id === card_id
    );
    return cardDetails;
  };

  useEffect(() => {
    const getDetails = async () => {
      const cardsData = httpServices.header.get(
        config.apiUrl + "/cards/dollar_card"
      );

      const rateData = httpServices.header.get(config.apiUrl + "/cards/rate");

      await Promise.all([cardsData, rateData]).then(([cards, rate]) => {
        console.log(rate);
        console.log(cards);

        setDollarCards(cards.data);
        setRate(rate.data.rate);
      });
      // .then((res) => {
      //   console.log(res);
      //   setDollarCards(res.data);
      // });
    };
    getDetails();
  }, [setDollarCards, setCardDetails]);
  return (
    <div>
      {dollarCards.length < 1 ? (
        <div>
          <p>
            You have not ordered a USD card yet. Please, click the button below
            to order.
          </p>
          <StyledButton
            onClick={() => navigate("/order-usd-card", { state: rate })}
            primary
            style={{}}
          >
            Get a USD Card
          </StyledButton>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#7359c6",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                style={{ height: "20px", width: "20px", borderRadius: "50%" }}
                src={NGFlag}
              />
              <FaArrowRight />{" "}
              <img
                src={USFlag}
                style={{ height: "20px", width: "20px", borderRadius: "50%" }}
              />{" "}
              <span style={{ fontSize: "15px", fontWeight: "600" }}>
                &#8358;{rate}
              </span>
            </div>
            <div
              onClick={() => navigate("/order-usd-card", { state: rate })}
              style={{
                padding: "2px",
                border: "2px solid #7359c6",
                borderRadius: "50%",
                display: "flex",
                alignIte: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <FaPlusCircle size={20} />
            </div>
          </div>

          <CardSlides
            cards={dollarCards}
            handleNav={goToSlide}
            currentIndex={currentIndex}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <QuickLink
              icon={<FaPlus />}
              text={"Fund Card"}
              link={`/fund-usd-card/${dollarCards[currentIndex].card_id}`}
            />{" "}
            <QuickLink
              icon={<FaMinus />}
              text={"Unload Card"}
              link={"/unload-usd-card"}
            />{" "}
            <QuickLink
              icon={<FaPause />}
              text={"Freeze Card"}
              link={"/freeze-usd-card"}
            />{" "}
            <QuickLink
              icon={<FaTrashAlt />}
              text={"Delete Card"}
              link={"/delete-usd-card"}
            />
          </div>
          <StyledButton
            onClick={() => {
              viewCardDetails(dollarCards[currentIndex].card_id);
            }}
            primary
          >
            {cardDetails ? "Hide Details" : "Show Details"}
          </StyledButton>
          {cardDetails ? (
            <div>
              <DetailsTitle>Available Balance</DetailsTitle>
              <Details>{cardDetails.available_balance / 100}</Details>
              <DetailsTitle>Card Name</DetailsTitle>
              <Details>{cardDetails.card_name}</Details>
              <DetailsTitle>
                Card Number{" "}
                <CopyToClipboard
                  text={cardDetails.card_number}
                  color="#7359c6"
                />
              </DetailsTitle>
              <Details>{cardDetails.card_number}</Details>
              <DetailsTitle>
                cvv <CopyToClipboard text={cardDetails.cvv} color="#7359c6" />
              </DetailsTitle>
              <Details>{cardDetails.cvv}</Details>
              <DetailsTitle>
                Expiry Month{" "}
                <CopyToClipboard
                  text={cardDetails.expiry_month}
                  color="#7359c6"
                />
              </DetailsTitle>
              <Details>{cardDetails.expiry_month}</Details>
              <DetailsTitle>
                Expiry Year{" "}
                <CopyToClipboard
                  text={cardDetails.expiry_year}
                  color="#7359c6"
                />
              </DetailsTitle>
              <Details>{cardDetails.expiry_year}</Details>
              <DetailsTitle>Status</DetailsTitle>
              <Details>{cardDetails.is_active ? "Active" : "Inactive"}</Details>
              <DetailsTitle>Billing Zip Code</DetailsTitle>
              <Details>{cardDetails.billing_address.billing_zip_code}</Details>
              <DetailsTitle>Billing Address</DetailsTitle>
              <Details>{`${cardDetails.billing_address.billing_address1},${cardDetails.billing_address.billing_city},\n
              ${cardDetails.billing_address.state}.`}</Details>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

const DetailsTitle = styled.div`
  color: #7359c6;
  font-size: 20px;
  font-weight: 600;
`;

const Details = styled.div`
  margin-bottom: 10px;
`;

export default USDCards;
