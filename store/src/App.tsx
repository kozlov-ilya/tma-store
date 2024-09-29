import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import WalletPage from './pages/WalletPage/WalletPage';
import CartPage from './pages/CartPage/CartPage';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';
import WebApp from '@twa-dev/sdk';
import { useInitColorProperties } from './hooks/useInitColorProperties';
import { useInitUserData } from './hooks/useInitUserData';

WebApp.expand();

function App() {
  useInitColorProperties();
  useInitUserData();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/wallet" element={<WalletPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="*" element={<NotfoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
