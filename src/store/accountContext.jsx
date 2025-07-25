import React, { createContext, useState } from "react";

export const PersonalAccountContext = createContext();

function PersonalAccountProvider({ children }) {
  const [personalAccount, setPersonalAccount] = useState({});

  let acountInfo = {
    personalAccount,
    setPersonalAccount,
  };

  return (
    <PersonalAccountContext.Provider value={acountInfo}>
      {children}
    </PersonalAccountContext.Provider>
  );
}

export default PersonalAccountProvider;
