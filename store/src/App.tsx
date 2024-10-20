import WebApp from '@twa-dev/sdk';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { MainLayout, HomePageLayout } from 'src/layouts';
import {
  CartPage,
  HomePage,
  CollectionPage,
  NotfoundPage,
  SavedPage,
  WalletPage,
} from 'pages';
import { useInitColorProperties, useStore } from 'hooks';

WebApp.expand();

function App() {
  const { initStore } = useStore();

  useEffect(() => {
    initStore();
  });

  useInitColorProperties();

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
