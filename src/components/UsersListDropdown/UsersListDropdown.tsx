import styles from './UsersListDropdown.module.css';
import { useState } from 'react';
import { IUser } from '../../interfaces';
import { useDispatch } from 'react-redux';
import { getPostsById } from '../../services/api';
import { setPostsToStore } from '../../redux/postsDataSlice';

interface IProps {
  usersData: IUser[];
}

const UsersListDropdown = ({ usersData }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const hendlUserIdSelect = (selectedUserId: number) => {
    getPostsById(selectedUserId)
      .then(data => dispatch(setPostsToStore(data)))
      .catch(err => console.error(err));
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        Select User To Filter Posts:
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {usersData.map((user: IUser) => (
            <div
              onClick={() => hendlUserIdSelect(user.id)}
              className={styles.dropdownItem}
              key={user.id}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { UsersListDropdown };
