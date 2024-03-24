import React, { createContext, useState } from "react";

export const userInfoContext = createContext();

function UserInfoContexttProvider({ children }) {
  // let [loading, setLoading] = useState(true);
  const userEmail = localStorage.getItem("email");
  const isAdmin = localStorage.getItem("is_admin");
  const isStaff = localStorage.getItem("is_staff");
  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");
  // setLoading(false);

  let userInfo = {
    userEmail,
    isAdmin,
    isStaff,
    name,
    photo,
  };

  return (
    <userInfoContext.Provider value={userInfo}>
      {children}
    </userInfoContext.Provider>
  );
}

export default UserInfoContexttProvider;
