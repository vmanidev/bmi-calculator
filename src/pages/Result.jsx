import { useLocation, useNavigate } from "react-router-dom";
import { calculateBmi } from "../util/bmi.js";

import styles from "./Result.module.css";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { height, weight } = location.state;
  const { bmi, status } = calculateBmi({ height, weight });

  const reCalculateBmi = () => navigate("/");

  return (
    <div className={styles.resultContainer}>
      <div>Your Results</div>
      <div className={`${styles.result} card`}>
        <div>{status}</div>
        <div>{!isNaN(bmi) && bmi}</div>
      </div>
      <button onClick={reCalculateBmi}>Re-Calculate Your BMI</button>
    </div>
  );
}
