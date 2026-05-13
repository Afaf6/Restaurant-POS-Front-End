import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

 function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
    <header className={styles.header}>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>☰</button>
      <span className={styles.brand}> FreshBite POS</span>
      <div className={styles.avatar}>U</div>
    </header>


     <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          ✕
        </button>

        <nav className={styles.navLinks}>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            🔑 Login
          </Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>
            📝 Register
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
      </>
  );
}

export default Header;