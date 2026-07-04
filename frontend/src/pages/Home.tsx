import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JobHuntへようこそ！</h1>
      <p className={styles.description}>
        RUNTEQでの就活体験記をシェアできるプラットフォームです。
      </p>
      <Link to="/tasks" className={styles.link}>
        早速、シェアしてみる
      </Link>
    </div>
  )
}

export default Home