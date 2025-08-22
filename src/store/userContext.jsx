import React, { createContext, useState } from "react";

export const userInfoContext = createContext();

function UserInfoContexttProvider({ children }) {
  // let [loading, setLoading] = useState(true);
  const userEmail = localStorage.getItem("user_email");
  const isAdmin = localStorage.getItem("is_superuser");
  const walletBalance = localStorage.getItem("wallet_balance");
  const name = localStorage.getItem("user_name");
  const token = localStorage.getItem("access_token");
  // const photo = localStorage.getItem("photo");
  // setLoading(false);

  let userInfo = {
    userEmail,
    isAdmin,
    walletBalance,
    name,
    token,
  };

  return (
    <userInfoContext.Provider value={userInfo}>
      {children}
    </userInfoContext.Provider>
  );
}

export default UserInfoContexttProvider;
