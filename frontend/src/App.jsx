import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider }  from './context/ChatContext';
import Header     from './components/Header/Header';
import Sidebar    from './components/Sidebar/Sidebar';
import ChatWindow from './components/Chat/ChatWindow';
import './styles/global.css';
import styles from './App.module.css';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={styles.app}>
      <Header
        onToggleSidebar={() => setSidebarOpen(o => !o)}
        sidebarOpen={sidebarOpen}
      />
      <div className={styles.body}>
        <Sidebar isOpen={sidebarOpen} />
        <ChatWindow />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Layout />
      </ChatProvider>
    </ThemeProvider>
  );
}
