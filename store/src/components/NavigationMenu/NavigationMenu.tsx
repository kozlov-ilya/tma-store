import styles from './NavigationMenu.module.css';

import { InlineButtons } from '@telegram-apps/telegram-ui';
import { RiHome6Fill } from 'react-icons/ri';
import { IoWallet } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { NavigationItem } from '../NavigationItem';
import { PiCardsFill } from 'react-icons/pi';

export const NavigationMenu = () => {
  return (
    <InlineButtons className={styles['NavigationMenu']}>
      <NavigationItem path="/" text="Home">
        <RiHome6Fill size={24} />
      </NavigationItem>
      <NavigationItem path="/wallet" text="Wallet">
        <IoWallet size={24} />
      </NavigationItem>
      <NavigationItem path="/cart" text="Cart">
        <FaShoppingCart size={24} />
      </NavigationItem>
      <NavigationItem path="/collection" text="My">
        <PiCardsFill size={24} />
      </NavigationItem>
    </InlineButtons>
  );
};
