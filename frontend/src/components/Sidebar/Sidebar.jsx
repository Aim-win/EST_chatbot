import { useChat } from '../../context/ChatContext';
import HistoryItem from './HistoryItem';
import styles from './Sidebar.module.css';

export default function Sidebar({ isOpen }) {
  const { conversations, activeId, newChat, loadConversation, deleteConversation } = useChat();

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.inner}>

        <div className={styles.sectionHead}>Historique</div>

        <button className={styles.newChatBtn} onClick={newChat}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5"  y1="12" x2="19" y2="12"/>
          </svg>
          Nouvelle conversation
        </button>

        <div className={styles.list}>
          {conversations.length === 0 ? (
            <p className={styles.empty}>Aucune conversation.</p>
          ) : (
            conversations.map(conv => (
              <HistoryItem
                key={conv.id}
                conv={conv}
                isActive={conv.id === activeId}
                onClick={() => loadConversation(conv.id)}
                onDelete={deleteConversation}
              />
            ))
          )}
        </div>

      </div>
    </aside>
  );
}
