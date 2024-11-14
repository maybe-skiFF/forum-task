import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Logo />
        <HeaderMenu />
      </div>
    </div>
  );
};

export { Header };
