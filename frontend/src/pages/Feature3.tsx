import styles from "../styles/feature1.module.css";
import FeatureDotDesign from "./FeatureDotDesign";

const Feature3 = () => {
  return (
    <section className={styles.feature1Container}>
      <FeatureDotDesign/>
      <div className={styles.feature1Left}>
        <p className={styles.feature1Number}>Feature03</p>
        <h1 className={styles.feature1Title}>面接でのリアルな体験をシェア</h1>
        <p className={styles.feature1Subtitle}>先輩たちの</p>
      </div>
      <img src="picture.png" width="320px" height="660px" alt="" />
    </section>
  )
}

export default Feature3
