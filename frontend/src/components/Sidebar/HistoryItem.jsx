import styles from './Sidebar.module.css';

export default function HistoryItem({ conv, isActive, onClick, onDelete }) {
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      title={conv.title}
    >
      <span className={styles.itemIcon}>💬</span>
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{conv.title}</p>
        <p className={styles.itemTime}>{conv.time}</p>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={e => { e.stopPropagation(); onDelete(conv.id); }}
        title="Supprimer"
        aria-label="Supprimer la conversation"
      >
        ✕
      </button>
    </div>
  );
}
