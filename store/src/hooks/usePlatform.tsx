import WebApp from '@twa-dev/sdk';

export const usePlatform = () => {
  const platform = WebApp.platform;

  const isMobile =
    platform === 'android' || platform === 'android_x' || platform === 'ios';
  const isDesktop = platform === 'tdesktop';
  const isWeb = platform === 'weba' || platform === 'webk';

  return { isMobile, isDesktop, isWeb };
};
