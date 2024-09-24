import styles from './CoinChip.module.css';

import { Chip, ChipProps } from '@telegram-apps/telegram-ui';

interface Props extends ChipProps {
  value: number;
  isActive?: boolean;
  setCoinsToDeposit?: React.Dispatch<React.SetStateAction<number>>;
}

export const CoinChip = (props: Props) => {
  const { value, isActive, setCoinsToDeposit, ...rest } = props;

  const classname = [
    styles['CoinChip'],
    isActive ? styles['CoinChip_active'] : '',
  ]
    .filter((cls) => cls.length)
    .join(' ');

  return (
    <Chip
      className={classname}
      onClick={setCoinsToDeposit ? () => setCoinsToDeposit(value) : undefined}
      {...rest}
    >
      {value}
    </Chip>
  );
};
