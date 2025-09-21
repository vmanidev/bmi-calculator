import React from "react";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

import "./style/global.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-title">BMI Calculator</div>
      <AppRoutes />
    </BrowserRouter>
  );
}
