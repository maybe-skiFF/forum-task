import styles from './UserItem.module.css';

const UserItem = () => {
  return (
    <div className={styles.userItemContainer}>
      <div className={styles.userItemImgWrapper}></div>
      <div className={styles.userItemContent}>
        <div className={styles.userItemDiscription}>
          <span className={styles.userItemName}>Name</span>
          <span className={styles.userItemEmail}>Email</span>
          <span className={styles.userItemWebsite}>Website</span>
        </div>
      </div>
    </div>
  );
};

export { UserItem };
