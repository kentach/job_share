import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";

type SidebarMenuProps = {
    drawerOpen: boolean; 
    handleClickOpen: (open:boolean) => () => void
  };

const Header = ({ drawerOpen, handleClickOpen }: SidebarMenuProps ) => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.appName}>ShareJob</span>
        <button
          className={styles.menuButton}
          aria-label="menu"
          onClick={handleClickOpen(true)}
        >
          <span className={styles.menuIcon} />
        </button>
      </header>

      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ""}`}>
          <button
            className={styles.closeButton}
            aria-label="close menu"
            onClick={handleClickOpen(false)}
          >
            ×
          </button>

          <nav>
            <Link to="/tasks" 
                  className={styles.sideMenu}
                  onClick={handleClickOpen(false)}>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i> ログイン
            </Link>
          </nav>
        </div>  
    </>
  )
}

export default Header
