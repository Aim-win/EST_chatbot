// ── Backend API configuration ─────────────────────────────────────────────
// Set VITE_API_URL in your .env file to point to your backend.
// Example: VITE_API_URL=http://localhost:8000

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

/**
 * Send a message to the chatbot backend.
 *
 * @param {string}   userText  - The user's message
 * @param {Array}    history   - Full message history [{ role, text }]
 * @returns {Promise<string>}  - The bot's reply text
 */
export async function sendToBackend(userText, history) {
  const response = await fetch(`${API_URL}/chat`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: userText,
      history: history.map(m => ({
        role:    m.role === 'bot' ? 'assistant' : 'user',
        content: m.text,
      })),
    }),
  });

  if (!response.ok) {
    throw new Error(`Backend error: ${response.status}`);
  }

  const data = await response.json();

  // Adjust the field name below to match your backend's response shape.
  // Common options: data.reply | data.message | data.answer | data.response
  return data.reply || data.message || data.answer || 'Pas de réponse du serveur.';
}
