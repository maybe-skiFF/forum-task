import { Link } from 'react-router-dom';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Logo />
        <div className={styles.headerLinkWrapper}>
          <Link className={styles.headerLink} to="/">
            Users
          </Link>
          <Link className={styles.headerLink} to="/posts">
            Posts
          </Link>
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export { Header };
