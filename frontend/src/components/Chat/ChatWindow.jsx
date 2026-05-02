import { useEffect, useRef } from 'react';
import { useChat } from '../../context/ChatContext';
import { sendToBackend } from '../../services/api';
import ChatBubble from './ChatBubble';
import ChatInput from './ChatInput';
import WelcomeScreen from '../UI/WelcomeScreen';
import styles from './ChatWindow.module.css';

export default function ChatWindow() {
  const { messages, isTyping, sendMessage } = useChat();
  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function handleSend(text) {
    sendMessage(text, sendToBackend);
  }

  const showWelcome = messages.length === 0 && !isTyping;

  return (
    <div className={styles.window}>
      <div className={styles.messages}>
        {showWelcome ? (
          <WelcomeScreen onSuggestion={handleSend} />
        ) : (
          <>
            {messages.map(msg => (
              <ChatBubble key={msg.id} message={msg} />
            ))}

            {isTyping && (
              <div className={styles.typingRow}>
                <div className={styles.typingAvatar}>EST</div>
                <div className={styles.typingBubble}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </>
        )}
      </div>

      <ChatInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
}
