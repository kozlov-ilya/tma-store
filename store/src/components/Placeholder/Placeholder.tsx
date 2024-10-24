import styles from './Placeholder.module.css';
import classNames from 'classnames';

import {
  Placeholder as TgPlaceholder,
  PlaceholderProps as TgPlaceholderProps,
} from '@telegram-apps/telegram-ui';
import Lottie from 'lottie-react';
import { LottieComponentProps } from 'lottie-react';

type PlaceholderProps = {
  lottie?: LottieComponentProps;
} & TgPlaceholderProps;

export const Placeholder = (props: PlaceholderProps) => {
  const { lottie, className, ...rest } = props;

  const cm = classNames(className, styles['Placeholder']);

  return (
    <div className={styles['PlaceholderContainer']}>
      <TgPlaceholder className={cm} {...rest}>
        {lottie && (
          <Lottie
            animationData={lottie.animationData}
            style={{ width: lottie.width, height: lottie.height }}
            autoplay
            loop
          />
        )}
      </TgPlaceholder>
    </div>
  );
};
