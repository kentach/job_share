import styles from "../styles/dotDesign.module.css";

const DotDesign = () => {
  return (
    <>
      <span className={`${styles.dot} ${styles.dotYellow}`} style={{ top: "0%", left: "45%" }} />
      <span className={`${styles.dot} ${styles.dotRed}`} style={{ top: "18%", left: "65%" }} />
      <span className={`${styles.dot} ${styles.dotPurple}`} style={{ top: "10%", left: "30%" }} />
      <span className={`${styles.dot} ${styles.dotRed}`} style={{ top: "65%", left: "72%" }} />
      <span className={`${styles.dot} ${styles.dotGreen}`} style={{ top: "5%", left: "2%" }} />
      <span className={`${styles.dot} ${styles.dotPurple}`} style={{ top: "75%", left: "60%" }} />

      <span className={`${styles.smallDot} ${styles.dotYellow}`} style={{ bottom: "10%", right: "25%" }} />
      <span className={`${styles.smallDot} ${styles.dotRed}`} style={{ top: "18%", right: "25%" }} />
      <span className={`${styles.smallDot} ${styles.dotGreen}`} style={{ top: "5%", right: "32%" }} />
      <span className={`${styles.smallDot} ${styles.dotYellow}`} style={{ bottom: "4%", left: "2%" }} />
    </>
  )
}

export default DotDesign