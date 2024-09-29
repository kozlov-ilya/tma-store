import styles from './HomePageLayout.module.css';

import { SegmentedControl } from '@telegram-apps/telegram-ui';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const swipeVariants = {
  initial: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? '-100%' : '100%',
  }),
  animate: {
    x: 0,
    transition: { duration: 0.125 },
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? '-100%' : '100%',
    transition: { duration: 0.125 },
  }),
};

export const HomePageLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Track current view manually
  const [currentView, setCurrentView] = useState(location.pathname);

  // This controls swipe direction and prevents instant switching
  const [direction, setDirection] = useState('left');

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentView === '/') {
        setDirection('left');
        setCurrentView('/saved');
      }
    },
    onSwipedRight: () => {
      if (currentView === '/saved') {
        setDirection('right');
        setCurrentView('/');
      }
    },
    preventScrollOnSwipe: true,
  });

  // Handle navigation after animation completes
  const handleAnimationComplete = () => {
    if (currentView !== pathname) {
      navigate(currentView);
    }
  };

  return (
    <>
      <div className={styles['HomePageLayout']}>
        <SegmentedControl className={styles['SegmentNav']}>
          <SegmentedControl.Item
            className={styles['SegmentNavItem']}
            selected={currentView === '/'}
            onClick={() => {
              if (currentView === '/saved') {
                setDirection('right');
                setCurrentView('/');
              }
            }}
          >
            Catalog
          </SegmentedControl.Item>
          <SegmentedControl.Item
            selected={currentView === '/saved'}
            onClick={() => {
              if (currentView === '/') {
                setDirection('left');
                setCurrentView('/saved');
              }
            }}
          >
            Saved
          </SegmentedControl.Item>
        </SegmentedControl>
        <div {...handlers} className={styles['SwipeContainer']}>
          <AnimatePresence mode="wait" onExitComplete={handleAnimationComplete}>
            <motion.div
              key={currentView}
              // custom={pathname === '/' ? 'right' : 'left'}
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
