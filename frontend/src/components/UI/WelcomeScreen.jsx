import styles from './WelcomeScreen.module.css';

const SUGGESTIONS = [
  { icon: '🎓', text: 'Quelles sont les filières DUT disponibles ?' },
  { icon: '📋', text: "Comment s'inscrire à l'EST ?" },
  { icon: '🕐', text: 'Quels sont les horaires des cours ?' },
  { icon: '📅', text: 'Quand commencent les examens ?' },
];

export default function WelcomeScreen({ onSuggestion }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>EST</div>

      <h2 className={styles.title}>Bonjour ! 👋</h2>
      <p className={styles.subtitle}>
        Je suis l'assistant de l'<strong>École Supérieure de Technologie</strong>.<br />
        Posez-moi vos questions sur les cours, filières et inscriptions.
      </p>

      <div className={styles.grid}>
        {SUGGESTIONS.map((s, i) => (
          <button
            key={i}
            className={styles.card}
            style={{ animationDelay: `${0.1 + i * 0.07}s` }}
            onClick={() => onSuggestion(s.text)}
          >
            <span className={styles.cardIcon}>{s.icon}</span>
            <span className={styles.cardText}>{s.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
