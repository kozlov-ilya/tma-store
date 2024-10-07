import styles from './NavigationItem.module.css';

import { InlineButtons } from '@telegram-apps/telegram-ui';
import { InlineButtonsItemProps } from '@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem';
import { Link, useMatch } from 'react-router-dom';

interface NavigationItemProps extends InlineButtonsItemProps {
  path: string;
}

export const NavigationItem = (props: NavigationItemProps) => {
  const { path, children, ...rest } = props;

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
      <Link to={path} className={styles['NavItemLink']}></Link>
    </InlineButtons.Item>
  );
};
