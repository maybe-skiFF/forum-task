import styles from './HeaderMenu.module.css';

import userImg from '../../../public/user-img-small.png';

const HeaderMenu = () => {
  return (
    <header className={styles.headerMenuWrapper}>
      <div className={styles.userInfoWrapper}>
        <img className={styles.userInfoImg} src={userImg} alt="userImg" />
        <span className={styles.userInfoName}>UserName</span>
      </div>
    </header>
  );
};

export { HeaderMenu };
