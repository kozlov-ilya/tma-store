import '@telegram-apps/telegram-ui/dist/styles.css';
import 'styles/global.css';

import { AppRoot } from '@telegram-apps/telegram-ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Providers } from 'src/providers/Providers';
import App from 'src/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot>
      <BrowserRouter>
        <Providers>
          <App />
        </Providers>
      </BrowserRouter>
    </AppRoot>
  </StrictMode>,
);
