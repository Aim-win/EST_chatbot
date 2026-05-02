#  EST Chatbot Frontend

Interface React pour le chatbot de l'École Supérieure de Technologie.

## Démarrage rapide 

Dans frontend enter cette cmd :
``` sh docker.sh```
voici le site:

```http://localhost:5173/```

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer le backend
# Ouvrir .env et renseigner l'URL de votre backend :
# VITE_API_URL=http://localhost:8000

# 3. Lancer le serveur de développement
npm run dev
```

L'application est accessible sur **http://localhost:5173**

---

## Structure du projet

```
src/
├── components/
│   ├── Chat/
│   │   ├── ChatWindow.jsx      # Zone principale de chat
│   │   ├── ChatBubble.jsx      # Bulle de message (user / bot)
│   │   └── ChatInput.jsx       # Barre de saisie
│   ├── Sidebar/
│   │   ├── Sidebar.jsx         # Panneau historique
│   │   └── HistoryItem.jsx     # Item de conversation
│   ├── Header/
│   │   └── Header.jsx          # En-tête + bouton thème
│   └── UI/
│       ├── ThemeToggle.jsx     # Bouton clair/sombre
│       └── WelcomeScreen.jsx   # Écran d'accueil animé
├── context/
│   ├── ThemeContext.jsx        # État global du thème
│   └── ChatContext.jsx         # État global du chat + historique
├── services/
│   └── api.js                  # Appels vers le backend
└── styles/
    └── global.css              # Variables CSS + animations
```

---

## Connexion au backend

Modifier `src/services/api.js` selon la forme de la réponse de votre backend :

```js
// Adapter ce champ au format de réponse de votre API :
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
