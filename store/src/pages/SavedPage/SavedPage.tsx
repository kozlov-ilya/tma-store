import { SavedList } from 'src/components/SavedList/SavedList';
import styles from './SavedPage.module.css';

const SavedPage = () => {
  return (
    <div className={styles['SavedPage']}>
      <SavedList />
    </div>
  );
};

export default SavedPage;
