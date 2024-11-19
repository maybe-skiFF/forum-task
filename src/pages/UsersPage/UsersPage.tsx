import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { UsersList } from '../../components/UsersList/UsersList';
import { getUsers } from '../../services/api';
import { setUsersToStore } from '../../redux/usersDataSlice';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';

const UsersPage = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(
    (state: RootState) => state.usersData.usersData,
  );

  useEffect(() => {
    if (usersData.length === 0) {
      getUsers()
        .then(data => dispatch(setUsersToStore(data)))
        .catch(err => console.error(err));
    }
  });

  return (
    <>
      <Header />
      <UsersList />
    </>
  );
};

export { UsersPage };
