import { useSelector } from 'react-redux';
import { UserItem } from '../UserItem/UserItem';
import styles from './UsersList.module.css';
import { RootState } from '../../redux/store';
import { IUser } from '../../interfaces/index';

const UsersList = () => {
  const usersData = useSelector(
    (state: RootState) => state.usersData.usersData,
  );

  return (
    <div className={styles.usersListContainer}>
      <p className={styles.title}>Users</p>
      <div className={styles.usersWrapper}>
        {usersData.map((user: IUser) => (
          <UserItem key={user.id} userData={user} />
        ))}
      </div>
    </div>
  );
};

export { UsersList };
