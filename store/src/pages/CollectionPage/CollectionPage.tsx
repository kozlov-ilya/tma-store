import styles from './CollectionPage.module.css';

import { Collection } from 'src/components/Collection/Collection';

const CollectionPage = () => {
  return (
    <div className={styles['CollectionPage']}>
      <Collection />
    </div>
  );
};

export default CollectionPage;
