import styles from './TokenChip.module.css';

import { Chip, ChipProps } from '@telegram-apps/telegram-ui';

interface Props extends ChipProps {
  value: number;
  isActive?: boolean;
  setTokensToDeposit?: React.Dispatch<React.SetStateAction<number>>;
}

export const TokenChip = (props: Props) => {
  const { value, isActive, setTokensToDeposit, ...rest } = props;

  const classname = [
    styles['TokenChip'],
    isActive ? styles['TokenChip_active'] : '',
  ]
    .filter((cls) => cls.length)
    .join(' ');

  return (
    <Chip
      className={classname}
      onClick={setTokensToDeposit ? () => setTokensToDeposit(value) : undefined}
      {...rest}
    >
      {value}
    </Chip>
  );
};
