import styles from "../styles/featureDotDesign.module.css";

const FeatureDotDesign = () => {
  return (
    <>
      <span className={`${styles.dot} ${styles.dotYellow}`} style={{ top: "10%", left: "63%" }} />
      <span className={`${styles.smallDot} ${styles.dotRed}`} style={{ top: "20%", left: "54%" }} />
      <span className={`${styles.smallDot} ${styles.dotPurple}`} style={{ top: "40%", left: "58%" }} />

      <span className={`${styles.dot} ${styles.dotRed}`} style={{ top: "10%", right: "10%" }} />
      <span className={`${styles.smallDot} ${styles.dotYellow}`} style={{ top: "40%", right: "8%" }} />
      <span className={`${styles.dot} ${styles.dotRed}`} style={{ top: "60%", right: "8%" }} />
    </>
  )
}

export default FeatureDotDesign
