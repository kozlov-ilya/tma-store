import { BalanceDisplay } from 'features/tokens/components/BalanceDisplay';
import { DepositForm } from 'features/tokens/components/DepositForm';
import { TransactionHistory } from 'features/tokens/components/TransactionHistory';

const WalletPage = () => {
  return (
    <div>
      <BalanceDisplay />
      <DepositForm />
      <TransactionHistory />
    </div>
  );
};

export default WalletPage;
