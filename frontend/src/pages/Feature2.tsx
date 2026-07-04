import styles from "../styles/feature2.module.css";
import DotDesign from "./DotDesign";

const Feature2 = () => {
  return (
    <section className={styles.feature2Container}>
      <DotDesign />
      <img src="picture.png" width="320px" height="660px" alt="" />
      <div className={styles.feature2Right}>
        <p className={styles.feature2Number}>Feature02</p>
        <h1 className={styles.feature2Title}>面接でのリアルな体験をシェア</h1>
        <p className={styles.feature2Subtitle}>先輩たちの</p>
      </div>

    </section>
  )
}

export default Feature2
