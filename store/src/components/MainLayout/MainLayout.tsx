import styles from './MainLayout.module.css';

import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import { Outlet } from 'react-router-dom';
import { CoinsIndicator } from '../CoinsIndicator/CoinsIndicator';

export const MainLayout = () => {
  return (
    <>
      <div className={styles['Main']}>
        <CoinsIndicator />
        <Outlet />
      </div>

      <div className={styles['NavigationMenu']}>
        <NavigationMenu />
      </div>
    </>
  );
};
