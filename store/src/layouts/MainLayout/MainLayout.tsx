import styles from './MainLayout.module.css';

import { NavigationMenu } from 'components/NavigationMenu';
import { Outlet } from 'react-router-dom';
import { useScrollToTop } from 'src/hooks';

export const MainLayout = () => {
  useScrollToTop();

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
