import { Navigate } from "react-router-dom";

import React from "react";

export default function ProtectedRoute({ accessToken, children }) {
  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
