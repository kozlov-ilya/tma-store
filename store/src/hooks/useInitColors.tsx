import { useEffect } from 'react';
import { usePlatform } from './usePlatform';
import WebApp from '@twa-dev/sdk';

export const useInitColorProperties = () => {
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
      WebApp.setHeaderColor('secondary_bg_color');
    }
  }, [isMobile, isWeb]);
};
