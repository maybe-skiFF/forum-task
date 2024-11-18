import { useState } from 'react';
import styles from './UserDropdownMenu.module.css';

const UserDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleMenu} className={styles.dropdownBtnWrapper}>
        <div className={styles.dropdownBtn}></div>
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={styles.dropdownItem}>Edit user</li>
          <li className={styles.dropdownItem}>Edit as admin</li>
        </ul>
      )}
    </div>
  );
};

export { UserDropdownMenu };
