import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className="app-title">BMI Calculator</div>
      <div className={styles.gender}>
        <div className="card">Male</div>
        <div className="card">Female</div>
      </div>
      <div className="heightSlider card"></div>
      <div className={styles.weightAndAge}>
        <div className="card">Age</div>
        <div className="card">Weight</div>
      </div>
      <button className={styles.fullGridCol}>Calculate Your BMI</button>
    </div>
  );
}
