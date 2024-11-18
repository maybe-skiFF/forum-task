import { IUser } from '../../interfaces';
import styles from './UserItem.module.css';
import { UserDropdownMenu } from '../UserDropdownMenu/UserDropdownMenu';

interface IProps {
  userData: IUser;
}

const UserItem = ({ userData }: IProps) => {
  const { name, email, website, id } = userData;

  return (
    <div className={styles.userItemContainer}>
      <div className={styles.userItemImgWrapper}></div>
      <div className={styles.userItemContent}>
        <div className={styles.userItemDiscription}>
          <span className={styles.userItemName}>{name}</span>
          <span className={styles.userItemEmail}>{email}</span>
          <span className={styles.userItemWebsite}>{website}</span>
        </div>
        <UserDropdownMenu userId={id} />
      </div>
    </div>
  );
};

export { UserItem };
