import { useEffect } from 'react';
import { usePlatform } from './usePlatform';

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
    }
  }, [isMobile, isWeb]);
};
