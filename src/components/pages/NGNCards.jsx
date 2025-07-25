import React, { useState, useEffect } from "react";
import { StyledButton } from "../../components/styledComponents";
import { useNavigate } from "react-router-dom";

const NGNCards = () => {
  const [nairaCards, setNairaCards] = useState([]);
  const navigate = useNavigate();
  return (
    <div>
      {nairaCards.length < 1 ? (
        <div>
          <p>
            You have not ordered a NGN card yet. Please, click the button below
            to order.
          </p>
          <StyledButton
            onClick={() => navigate("/order-ngn-card")}
            primary
            style={{}}
          >
            Get a NGN Card
          </StyledButton>
        </div>
      ) : (
        "hello"
      )}
    </div>
  );
};

export default NGNCards;
