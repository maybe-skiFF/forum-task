import { Link } from 'react-router-dom';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState } from 'react';
import { setAdmin } from '../../redux/usersDataSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isUserAdmin = useSelector(
    (state: RootState) => state.usersData.isAdmin,
  );
  const [isAdmin, setIsAdmin] = useState<boolean>(isUserAdmin);

  const adminCheckboxHandler = () => {
    setIsAdmin(!isAdmin);
    dispatch(setAdmin(!isAdmin));
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Logo />
        <div className={styles.headerLinkWrapper}>
          <div className={styles.adminWrapper}>
            <label className={styles.adminLabel} htmlFor="admin">
              Admin
            </label>
            <input
              className={styles.adminInput}
              type="checkbox"
              name="admin"
              id="admin"
              checked={isAdmin}
              onChange={adminCheckboxHandler}
            />
          </div>
          <Link className={styles.headerLink} to="/">
            Users
          </Link>
          <Link className={styles.headerLink} to="/posts">
            Posts
          </Link>
          <Link className={styles.headerLink} to="/favorites">
            Favorites
          </Link>
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export { Header };
