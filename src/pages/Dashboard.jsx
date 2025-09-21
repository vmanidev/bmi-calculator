import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    gender: "",
    height: 0,
    weight: 0,
    age: 0,
  });

  const navigate = useNavigate();

  useEffect(
    () => setFormData({ gender: "", height: 0, weight: 0, age: 0 }),
    []
  );

  function onchangeHandle({ target }) {
    const { name, value } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["weight", "height"].includes(name) ? Number(value) : value,
    }));
  }

  function formSubmit() {
    navigate("/result", { state: formData });
  }

  function increment(name) {
    setFormData((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  }

  function decrement(name) {
    if (formData[name] === 0) return;
    setFormData((prev) => ({ ...prev, [name]: prev[name] - 1 }));
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.gender}>
        <label className={`card ${formData.gender === "male" && "highlight"}`}>
          <input
            type="checkbox"
            name="gender"
            value="male"
            onChange={onchangeHandle}
            checked={formData.gender === "male"}
          />
          <span className="material-icons material-symbols-outlined">male</span>
          <span>Male</span>
        </label>
        <label
          className={`card ${formData.gender === "female" && "highlight"}`}
        >
          <input
            type="checkbox"
            name="gender"
            value="female"
            onChange={onchangeHandle}
            checked={formData.gender === "female"}
          />
          <span className="material-icons material-symbols-outlined">
            female
          </span>
          <span>Female</span>
        </label>
      </div>
      <div className={`${styles.heightSlider} card`}>
        <div className="card-title-container">
          <span className="card-title">Height</span>
          <span className="card-subtitle">
            {formData.height ? `${formData.height} CM` : `--`}
          </span>
        </div>
        <input
          id="heightScale"
          name="height"
          type="range"
          min="100"
          max="250"
          value={formData.height}
          onChange={onchangeHandle}
        />
      </div>
      <div className={styles.weightAndAge}>
        <div className="card">
          <div className="card-title-container">
            <span className="card-title">Weight</span>
            <span className="card-subtitle">
              {formData.weight ? `${formData.weight} KG` : `--`}
            </span>
          </div>
          <div className={styles.incDecBtnContainer}>
            <span
              className="material-icons material-symbols-outlined"
              onClick={(e) => increment("weight")}
            >
              add
            </span>
            <span
              className="material-icons material-symbols-outlined"
              onClick={(e) => decrement("weight")}
            >
              remove
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-title-container">
            <span className="card-title">Age</span>
            <span className="card-subtitle">
              {formData.age ? formData.age : `--`}
            </span>
          </div>
          <div className={styles.incDecBtnContainer}>
            <span
              className="material-icons material-symbols-outlined"
              onClick={(e) => increment("age")}
            >
              add
            </span>
            <span
              className="material-icons material-symbols-outlined"
              onClick={(e) => decrement("age")}
            >
              remove
            </span>
          </div>
        </div>
      </div>
      <button className={styles.fullGridCol} onClick={formSubmit}>
        Calculate Your BMI
      </button>
    </div>
  );
}
