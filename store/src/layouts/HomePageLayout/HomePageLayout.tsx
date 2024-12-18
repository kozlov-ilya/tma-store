import styles from './HomePageLayout.module.css';

import { SegmentedControl } from '@telegram-apps/telegram-ui';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const transitionDuration = 0.1;

const swipeVariants: Variants = {
  initial: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? '-100%' : '100%',
  }),
  animate: {
    x: 0,
    transition: { duration: transitionDuration, ease: 'easeOut' },
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? '-100%' : '100%',
    transition: { duration: transitionDuration },
  }),
};

export const HomePageLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [currentView, setCurrentView] = useState(pathname);
  const [direction, setDirection] = useState(
    pathname === '/' ? 'right' : 'left',
  );

  useEffect(() => {
    setCurrentView(pathname);
    setDirection(pathname === '/' ? 'right' : 'left');
  }, [pathname]);

  const navigateToHomeView = () => {
    if (currentView === '/') return;

    setDirection('right');
    setCurrentView('/');
  };

  const navigateToSavedView = () => {
    if (currentView === '/saved') return;

    setDirection('left');
    setCurrentView('/saved');
  };

  const handlers = useSwipeable({
    onSwipedLeft: navigateToSavedView,
    onSwipedRight: navigateToHomeView,
    preventScrollOnSwipe: true,
  });

  const handleAnimationComplete = () => {
    if (currentView === pathname) return;

    navigate(currentView);
  };

  return (
    <>
      <div className={styles['HomePageLayout']}>
        <SegmentedControl className={styles['SegmentNav']}>
          <SegmentedControl.Item
            className={styles['SegmentNavItem']}
            selected={currentView === '/'}
            onClick={navigateToHomeView}
          >
            Catalog
          </SegmentedControl.Item>
          <SegmentedControl.Item
            selected={currentView === '/saved'}
            onClick={navigateToSavedView}
          >
            Saved
          </SegmentedControl.Item>
        </SegmentedControl>
        <div {...handlers} className={styles['SwipeContainer']}>
          <AnimatePresence
            mode="wait"
            onExitComplete={handleAnimationComplete}
            initial={false}
          >
            <motion.div
              key={currentView}
              custom={direction}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={swipeVariants}
              className={styles['MotionContainer']}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
