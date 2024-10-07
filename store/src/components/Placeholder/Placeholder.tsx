import styles from './Placeholder.module.css';

import {
  Placeholder as TgPlaceholder,
  PlaceholderProps as TgPlaceholderProps,
} from '@telegram-apps/telegram-ui';

export const Placeholder = (props: TgPlaceholderProps) => {
  const { children, ...rest } = props;

  return (
    <TgPlaceholder className={styles['Placeholder']} {...rest}>
      {children}
    </TgPlaceholder>
  );
};
