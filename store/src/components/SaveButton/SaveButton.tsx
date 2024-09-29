import styles from './SaveButton.module.css';

import { IconButton, IconButtonProps } from '@telegram-apps/telegram-ui';
import { FaHeart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';

interface SaveButtonProps extends IconButtonProps {
  isActive?: boolean;
}

export const SaveButton = (props: SaveButtonProps) => {
  const { isActive, ...rest } = props;

  const ButtonIcon = isActive ? FaHeart : FaRegHeart;

  const classname = [
    styles['SaveButton'],
    isActive ? styles['SaveButton_active'] : '',
  ]
    .filter((cls) => cls.length)
    .join(' ');

  return (
    <IconButton className={classname} {...rest}>
      <ButtonIcon />
    </IconButton>
  );
};
