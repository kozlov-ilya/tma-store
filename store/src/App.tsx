import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout/MainLayout';
import { HomePageLayout } from './layouts/HomePageLayout/HomePageLayout';
import HomePage from './pages/HomePage/HomePage';
import WalletPage from './pages/WalletPage/WalletPage';
import CartPage from './pages/CartPage/CartPage';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';
import SavedPage from './pages/SavedPage/SavedPage';
import CollectionPage from './pages/CollectionPage/CollectionPage';

import { useInitColorProperties } from './hooks/useInitColorProperties';
import { useInitUserData } from './hooks/useInitUserData';

import WebApp from '@twa-dev/sdk';

WebApp.expand();

function App() {
  useInitColorProperties();
  useInitUserData();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePageLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/saved" element={<SavedPage />}></Route>
        </Route>
        <Route path="/wallet" element={<WalletPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/collection" element={<CollectionPage />}></Route>
        <Route path="*" element={<NotfoundPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
