import { Navigate } from "react-router-dom";

import React, { useEffect } from "react";

export default function ProtectedRoute({
  accessToken,
  children,
  pinSetup,
  path,
}) {
  if (!pinSetup && path !== "/pin-setup") {
    return <Navigate to={"/pin-setup"} />;
  }
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
