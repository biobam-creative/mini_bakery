import React from "react";
import { Link } from "react-router-dom";

const CardholderVerify = () => {
  return (
    <div>
      Your Details have been recieved we will send you an email when your
      identity has been vefified. Back to <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default CardholderVerify;
