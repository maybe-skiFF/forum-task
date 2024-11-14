import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { UsersList } from '../../components/UsersList/UsersList';
import { getUsers } from '../../services/api';
import { setUsersToStore } from '../../redux/usersDataSlice';
import { useEffect } from 'react';

const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
      .then(data => dispatch(setUsersToStore(data)))
      .catch(err => console.error(err));
  }, [dispatch]);

  return (
    <>
      <Header />
      <UsersList />
    </>
  );
};

export { UsersPage };
