import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { BrowserRouter } from 'react-router-dom';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppRoot>
  </StrictMode>,
);
