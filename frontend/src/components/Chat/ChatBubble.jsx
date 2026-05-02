import styles from './ChatBubble.module.css';

export default function ChatBubble({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={`${styles.row} ${isUser ? styles.user : styles.bot}`}>
      <div className={`${styles.avatar} ${isUser ? styles.avatarUser : styles.avatarBot}`}>
        {isUser ? 'Moi' : 'EST'}
      </div>
      <div className={styles.group}>
        <div className={`${styles.bubble} ${isUser ? styles.bubbleUser : styles.bubbleBot}`}>
          {message.text}
        </div>
        <span className={`${styles.time} ${isUser ? styles.timeRight : styles.timeLeft}`}>
          {message.time}
        </span>
      </div>
    </div>
  );
}
