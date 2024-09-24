import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import Homepage from './pages/Homepage/Homepage';
import WalletPage from './pages/WalletPage/WalletPage';
import Cartpage from './pages/Cartpage';
import Notfoundpage from './pages/Notfoundpage';
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
        <Route index element={<Homepage />}></Route>
        <Route path="/wallet" element={<WalletPage />}></Route>
        <Route path="/cart" element={<Cartpage />}></Route>
        <Route path="*" element={<Notfoundpage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
