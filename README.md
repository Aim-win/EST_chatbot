#  EST Chatbot Frontend

Interface React pour le chatbot de l'École Supérieure de Technologie.

## Démarrage rapide 

Dans frontend enter cette cmd :

<a>sh docker.sh</a>

voici le site:

**http://localhost:5173/**
## Configration:
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur **http://localhost:5173**

---

## Structure du projet

```
src/
├── components/
│   ├── Chat/
│   │   ├── ChatWindow.jsx     
│   │   ├── ChatBubble.jsx  
│   │   └── ChatInput.jsx  
│   ├── Sidebar/
│   │   ├── Sidebar.jsx        
│   │   └── HistoryItem.jsx
│   ├── Header/
│   │   └── Header.jsx         
│   └── UI/
│       ├── ThemeToggle.jsx    
│       └── WelcomeScreen.jsx  
├── context/
│   ├── ThemeContext.jsx       
│   └── ChatContext.jsx        
├── services/
│   └── api.js               
└── styles/
    └── global.css       
```

---

## Connexion au backend

return data.reply || data.message || data.answer;
```

Le body envoyé au backend a ce format :
```json
{
  "message": "Question de l'utilisateur",
  "history": [
    { "role": "user",      "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}
```

---

##  Thèmes

Les couleurs sont dans `src/styles/global.css` sous forme de variables CSS.
Les deux thèmes (clair/sombre) sont définis via `[data-theme="light"]` et `[data-theme="dark"]`.

---

## Build production

```bash
npm run build
```
