import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
  window.addEventListener('load', () => {
    const swPath = import.meta.env.DEV ? '/sw.js' : 'sw.js';
    navigator.serviceWorker.register(swPath)
      .then((reg) => console.log('[PWA] Service Worker registered successfully:', reg.scope))
      .catch((err) => console.error('[PWA] Service Worker registration failed:', err));
  });
}

