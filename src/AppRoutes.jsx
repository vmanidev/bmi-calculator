import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Result from "./pages/Result";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/result" element={<Result/>} />
    </Routes>
  );
}
