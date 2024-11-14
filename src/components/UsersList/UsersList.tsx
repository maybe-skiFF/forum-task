import { UserItem } from '../UserItem/UserItem';
import styles from './UsersList.module.css';

const UsersList = () => {
  return (
    <div className={styles.usersListWrapper}>
      <p className={styles.title}>Users</p>
      <UserItem />
    </div>
  );
};

export { UsersList };
