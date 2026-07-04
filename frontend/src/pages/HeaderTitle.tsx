import { Link } from "react-router-dom";
import DotDesign from "./DotDesign";
import styles from "../styles/header.module.css";

const HeaderTitle  = () => {
  return (
    <>
      <div className={styles.hero}>
        <DotDesign />
        <div className={styles.container}>
          <h1 className={styles.title}>あなたの転職体験を<br />みんなのために。</h1>
          <p className={styles.description}>
            RUNTEQでの就活体験記をシェアできるプラットフォーム
          </p>
          <Link to="/tasks" className={styles.link}>
            早速、シェアしてみる
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeaderTitle 
