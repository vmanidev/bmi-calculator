import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

import "./style/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
