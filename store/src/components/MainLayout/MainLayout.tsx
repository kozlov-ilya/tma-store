import styles from './MainLayout.module.css';

import { NavigationMenu } from '../NavigationMenu/NavigationMenu';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <div className={styles['Main']}>
        <Outlet />
      </div>

      <div className={styles['NavigationMenu']}>
        <NavigationMenu />
      </div>
    </>
  );
};
