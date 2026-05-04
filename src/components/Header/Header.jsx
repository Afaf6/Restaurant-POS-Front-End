import styles from "./Header.module.css";

 function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.hamburger}>☰</span>
      <span className={styles.brand}> FreshBite POS</span>
      <div className={styles.avatar}>U</div>
    </header>
  );
}

export default Header;