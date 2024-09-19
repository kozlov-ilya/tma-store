import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout/MainLayout';
import Homepage from './pages/Homepage/Homepage';
import Walletpage from './pages/Walletpage';
import Cartpage from './pages/Cartpage';
import Notfoundpage from './pages/Notfoundpage';
import WebApp from '@twa-dev/sdk';

WebApp.expand();

function App() {
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
