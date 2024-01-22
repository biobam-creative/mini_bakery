import React, { createContext } from "react";

export const userInfoContext = createContext();

function UserInfoContexttProvider({ children }) {
  const userEmail = localStorage.getItem("email");
  const isAdmin = localStorage.getItem("is_superuser");
  const isStaff = localStorage.getItem("is_staff");
  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");

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
