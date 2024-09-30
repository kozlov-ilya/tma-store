import styles from './Button.module.css';

import {
  Button as TgButton,
  ButtonProps as TgButtonProps,
} from '@telegram-apps/telegram-ui';

interface ButtonProps extends TgButtonProps {
  context?: 'danger' | 'alternative';
}

export const Button = (props: ButtonProps) => {
  const { context, children, ...rest } = props;

  const classname = [
    styles['Button'],
    context ? styles[`Button_context_${context}`] : '',
  ]
    .filter((cls) => cls.length)
    .join(' ');

  return (
    <TgButton className={classname} {...rest}>
      {children}
    </TgButton>
  );
};
