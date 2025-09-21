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
        <div className="card">
          <div className="card-title-container">
            <span className="card-title">Weight</span>
            <span className="card-subtitle">65 KG</span>
          </div>
          <div className={styles.incDecBtnContainer}>
            <span class="material-icons material-symbols-outlined">add</span>
            <span class="material-icons material-symbols-outlined">remove</span>
          </div>
        </div>
        <div className="card">
          <div className="card-title-container">
            <span className="card-title">Age</span>
            <span className="card-subtitle">30</span>
          </div>
          <div className={styles.incDecBtnContainer}>
            <span class="material-icons material-symbols-outlined">add</span>
            <span class="material-icons material-symbols-outlined">remove</span>
          </div>
        </div>
      </div>
      <button className={styles.fullGridCol}>Calculate Your BMI</button>
    </div>
  );
}
