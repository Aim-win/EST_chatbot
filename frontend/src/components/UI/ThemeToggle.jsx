import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className={styles.btn}
      onClick={toggleTheme}
      title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      aria-label="Changer le thème"
    >
      <span className={styles.icon}>{isDark ? '☀️' : '🌙'}</span>
      <span className={styles.label}>{isDark ? 'Clair' : 'Sombre'}</span>
    </button>
  );
}
