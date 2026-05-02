import { useState, useRef } from 'react';
import styles from './ChatInput.module.css';

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('');
  const ref = useRef(null);

  function handleInput(e) {
    setValue(e.target.value);
    // Auto-resize
    const el = ref.current;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  }

  function submit() {
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue('');
    if (ref.current) {
      ref.current.style.height = 'auto';
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputRow}>
        <textarea
          ref={ref}
          className={styles.input}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Posez votre question… (Entrée pour envoyer)"
          rows={1}
          disabled={disabled}
          aria-label="Message"
        />
        <button
          className={`${styles.sendBtn} ${!value.trim() || disabled ? styles.sendDisabled : ''}`}
          onClick={submit}
          disabled={!value.trim() || disabled}
          title="Envoyer"
          aria-label="Envoyer le message"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width="16" height="16">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>
      <p className={styles.hint}>Shift + Entrée pour un saut de ligne</p>
    </div>
  );
}
