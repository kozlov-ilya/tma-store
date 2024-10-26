import styles from './NavigationItem.module.css';

import { InlineButtons } from '@telegram-apps/telegram-ui';
import { InlineButtonsItemProps } from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem';
import { Link, useMatch } from 'react-router-dom';
import { memo } from 'react';
import { Badge } from '@telegram-apps/telegram-ui';
import { Cart } from 'src/features/products/components/Cart';

interface NavigationItemProps extends InlineButtonsItemProps {
  path: string;
  cartLength?: number;
}

export const NavigationItem = memo((props: NavigationItemProps) => {
  const { path, children, cartLength, ...rest } = props;

  const match = useMatch(path);
  const isActive = !!match;

  const classname = [
    styles['NavigationItem'],
    !isActive ? styles['NavigationItem_active'] : '',
  ]
    .filter((cls) => cls.length)
    .join(' ');

  return (
    <InlineButtons.Item
      {...rest}
      mode={isActive ? 'bezeled' : 'plain'}
      className={classname}
    >
      {children}
      <Link
        to={path}
        className={styles['NavItemLink']}
        preventScrollReset={true}
      />
      {cartLength && cartLength !== 0 ? (
        <Badge type="number" className={styles['Badge']} mode="critical">
          {cartLength}
        </Badge>
      ) : null}
    </InlineButtons.Item>
  );
});
