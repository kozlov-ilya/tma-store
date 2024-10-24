import styles from './Placeholder.module.css';
import classNames from 'classnames';

import {
  Placeholder as TgPlaceholder,
  PlaceholderProps as TgPlaceholderProps,
} from '@telegram-apps/telegram-ui';
import Lottie from 'lottie-react';
import { LottieComponentProps } from 'lottie-react';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';

type PlaceholderProps = {
  lottie?: LottieComponentProps;
  button?: { navigateTo: string; text: string };
} & TgPlaceholderProps;

export const Placeholder = (props: PlaceholderProps) => {
  const { className, lottie, button, ...rest } = props;

  const navigate = useNavigate();

  const cm = classNames(className, styles['Placeholder']);

  return (
    <div className={styles['PlaceholderContainer']}>
      <TgPlaceholder
        className={cm}
        {...rest}
        action={
          button && (
            <Button onClick={() => navigate(button.navigateTo)} stretched>
              {button.text}
            </Button>
          )
        }
      >
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
