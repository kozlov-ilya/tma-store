import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import Homepage from './pages/Homepage/Homepage';
import Walletpage from './pages/Walletpage';
import Cartpage from './pages/Cartpage';
import Notfoundpage from './pages/Notfoundpage';
import WebApp from '@twa-dev/sdk';
import { useEffect } from 'react';
import { usePlatform } from './hooks/usePlatform';

WebApp.expand();

function App() {
  const { isMobile, isWeb } = usePlatform();

  useEffect(() => {
    if (isMobile || isWeb) {
      document.body.style.setProperty(
        '--color-bg-primary',
        'var(--tg-theme-secondary-bg-color)',
      );
      document.body.style.setProperty(
        '--color-bg-secondary',
        'var(--tg-theme-bg-color)',
      );
    }
  }, [isMobile, isWeb]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />}></Route>
        <Route path="/wallet" element={<Walletpage />}></Route>
        <Route path="/cart" element={<Cartpage />}></Route>
        <Route path="*" element={<Notfoundpage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
