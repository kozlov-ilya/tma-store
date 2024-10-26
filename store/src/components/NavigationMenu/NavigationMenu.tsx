import styles from './NavigationMenu.module.css';

import { InlineButtons } from '@telegram-apps/telegram-ui';
import { RiHome6Fill } from 'react-icons/ri';
import { IoWallet } from 'react-icons/io5';
import { FaShoppingCart } from 'react-icons/fa';
import { PiCardsThreeFill } from 'react-icons/pi';

import { NavigationItem } from '../NavigationItem';
import { useProductStateContext } from 'features/products/contexts/productContext';

export const NavigationMenu = () => {
  const { cart } = useProductStateContext();

  return (
    <InlineButtons className={styles['NavigationMenu']}>
      <NavigationItem path="/" text="Home">
        <RiHome6Fill size={24} />
      </NavigationItem>
      <NavigationItem path="/wallet" text="Wallet">
        <IoWallet size={24} />
      </NavigationItem>
      <NavigationItem path="/cart" text="Cart" cartLength={cart.length}>
        <FaShoppingCart size={24} />
      </NavigationItem>
      <NavigationItem path="/collection" text="My">
        <PiCardsThreeFill size={24} />
      </NavigationItem>
    </InlineButtons>
  );
};
