import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className="app-title">BMI Calculator</div>
      <div className={styles.gender}>
        <div className="card">
          <span class="material-icons material-symbols-outlined">male</span>
          <span>Male</span>
        </div>
        <div className="card">
          <span class="material-icons material-symbols-outlined">female</span>
          <span>Female</span>
        </div>
      </div>
      <div className={`${styles.heightSlider} card`}>
        <div className="card-title-container">
          <span className="card-title">Height</span>
          <span className="card-subtitle">165 CM</span>
        </div>
        <input
          id="heightScale"
          name="height"
          type="range"
          min="100"
          max="250"
        />
      </div>
      <div className={styles.weightAndAge}>
        <div className="card">Age</div>
        <div className="card">Weight</div>
      </div>
      <button className={styles.fullGridCol}>Calculate Your BMI</button>
    </div>
  );
}
