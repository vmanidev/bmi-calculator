import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={`${styles.fullGridCol} app-title`}>BMI Calculator</div>
      <div className="gender"></div>
      <div className="heightSlider"></div>
      <div className="ageAndWeight"></div>
      <button className={styles.fullGridCol}>Calculate Your BMI</button>
    </div>
  );
}
