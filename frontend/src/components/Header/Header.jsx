import ThemeToggle from '../UI/ThemeToggle';
import styles from './Header.module.css';

export default function Header({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          className={styles.menuBtn}
          onClick={onToggleSidebar}
          title={sidebarOpen ? 'Fermer le panneau' : 'Ouvrir le panneau'}
          aria-label="Toggle sidebar"
        >
          <span className={`${styles.bar} ${sidebarOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${sidebarOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${sidebarOpen ? styles.open : ''}`} />
        </button>

        <div className={styles.logoCircle}>EST</div>

        <div className={styles.titleBlock}>
          <span className={styles.title}>Assistant EST</span>
          <span className={styles.subtitle}>École Supérieure de Technologie</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.statusDot} title="En ligne" />
        <ThemeToggle />
      </div>
    </header>
  );
}
