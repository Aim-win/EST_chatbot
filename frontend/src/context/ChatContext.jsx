import { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext(null);

const STORAGE_KEY = 'est-chat-history';

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState(loadHistory);
  const [activeId, setActiveId]           = useState(null);
  const [messages, setMessages]           = useState([]);
  const [isTyping, setIsTyping]           = useState(false);

  // Persist history whenever it changes
  useEffect(() => {
    saveHistory(conversations);
  }, [conversations]);

  /** Start a brand-new empty chat */
  function newChat() {
    setActiveId(null);
    setMessages([]);
  }

  /** Load an existing conversation by id */
  function loadConversation(id) {
    const conv = conversations.find(c => c.id === id);
    if (!conv) return;
    setActiveId(id);
    setMessages(conv.messages || []);
  }

  /** Delete a conversation */
  function deleteConversation(id) {
    setConversations(prev => prev.filter(c => c.id !== id));
    if (activeId === id) newChat();
  }

  /**
   * Add a user message, then call the backend and append the bot reply.
   * @param {string} text
   * @param {function} apiFn  - async fn(text, history) => string (bot reply)
   */
  async function sendMessage(text, apiFn) {
    const userMsg = {
      id:   Date.now(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMsgs = [...messages, userMsg];
    setMessages(updatedMsgs);
    setIsTyping(true);

    let botText = '';
    try {
      botText = await apiFn(text, updatedMsgs);
    } catch {
      botText = "Désolé, une erreur s'est produite. Veuillez réessayer.";
    }

    const botMsg = {
      id:   Date.now() + 1,
      role: 'bot',
      text: botText,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
    };

    const finalMsgs = [...updatedMsgs, botMsg];
    setMessages(finalMsgs);
    setIsTyping(false);

    // Save / update the conversation in history
    if (activeId) {
      setConversations(prev =>
        prev.map(c => c.id === activeId ? { ...c, messages: finalMsgs } : c)
      );
    } else {
      const newConv = {
        id:       Date.now() + 2,
        title:    text.length > 38 ? text.slice(0, 38) + '…' : text,
        time:     'Maintenant',
        messages: finalMsgs,
      };
      setActiveId(newConv.id);
      setConversations(prev => [newConv, ...prev]);
    }
  }

  return (
    <ChatContext.Provider value={{
      conversations,
      activeId,
      messages,
      isTyping,
      newChat,
      loadConversation,
      deleteConversation,
      sendMessage,
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
