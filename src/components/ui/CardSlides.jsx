import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../static/logos/logowhite.png";
import mastercardLogo from "../../static/logos/Mastercard.svg";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { FaAsterisk } from "react-icons/fa";

const CardSlides = ({ cards, currentIndex, handleNav }) => {
  return (
    <Container>
      <SlidesContainer>
        {currentIndex > 0 && (
          <ChangeButton onClick={() => handleNav(currentIndex - 1)}>
            <FaCircleChevronLeft />
          </ChangeButton>
        )}
        {cards.map((card, index) => (
          <Card key={card.id} active={index === currentIndex}>
            <CardTop
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <img src={logo} style={{ height: "15px" }} />
            </CardTop>
            <CardMiddle
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardNumber>
                {"****" + " " + "****" + " " + "****" + " "}
                {card.last_four}
              </CardNumber>

              <Expiry>Valid Thru {card.card_expiry || "MM/YY"}</Expiry>
            </CardMiddle>
            <CardBottom>
              <CardName> {card.card_name}</CardName>
              <img src={mastercardLogo} style={{ height: "17px" }} />
            </CardBottom>
            {/* <p>Card ID: {card.card_id}</p> */}
          </Card>
        ))}
        {currentIndex < cards.length - 1 && (
          <ChangeButton onClick={() => handleNav(currentIndex + 1)}>
            <FaCircleChevronRight />
          </ChangeButton>
        )}
      </SlidesContainer>
      <DotContainer>
        {cards.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleNav(index)}
          />
        ))}
      </DotContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 210px;
  width: 100%;
  overflow: hidden;
`;

const SlidesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
`;

const Card = styled.div`
  height: 110px;
  width: 220px;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  margin: 10px;
  border-radius: 12px;
  color: white;
  background-color: #7359c6;
`;

const ChangeButton = styled.button`
  cursor: pointer;
  // height: 20px;
  // width: 20px;
  font-size: 20px;
  border: none;
  color: #7359c6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTop = styled.div``;

const CardMiddle = styled.div``;

const CardNumber = styled.div`
  font-size: 16px;
`;
const Expiry = styled.div`
  font-size: 10px;
  margin-top: 5px;
`;
const CardName = styled.div`
  font-size: 14px;
`;
const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no- repeat;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 50px;
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `background-color: #7359c6; width: 15px; border-radius: 50px; `
      : `background-color:rgba(114, 89, 198, 0.67);`}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;
export default CardSlides;
