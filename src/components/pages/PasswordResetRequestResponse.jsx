import React from "react";
import { sidebarContext } from "../../store/sidebarContext";

export default function PasswordResetRequestResponse() {
  const { setExpandSidebar } = useContext(sidebarContext);
  setExpandSidebar(false);
  return <div>Password reset e-mail has been sent to your email</div>;
}
