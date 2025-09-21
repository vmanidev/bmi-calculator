import { useLocation } from "react-router-dom";
import { calculateBmi } from "../util/bmi.js";

import styles from "./result.module.css";

export default function Result() {
  const location = useLocation();
  const { height, weight } = location.state;
  const { bmi, status } = calculateBmi({ height, weight });
  
  return (
    <div className={styles.resultContainer}>
      <div>Your Results</div>
      <div className={`${styles.result} card`}>
        <div>{status}</div>
        <div>{bmi}</div>
      </div>
    </div>
  );
}
