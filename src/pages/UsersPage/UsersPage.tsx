import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { UsersList } from '../../components/UsersList/UsersList';
import { getUsers } from '../../services/api';
import { setUsersToStore } from '../../redux/usersDataSlice';
import { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';
import { Loader } from '../../components/Loader/Loader';

const UsersPage = () => {
  const dispatch = useDispatch();
  const usersData = useSelector(
    (state: RootState) => state.usersData.usersData,
  );
  const [isUsersLoading, setIsUsersLoading] = useState<boolean>(false);

  useEffect(() => {
    if (usersData.length === 0) {
      getUsers(setIsUsersLoading)
        .then(data => dispatch(setUsersToStore(data)))
        .catch(err => console.error(err));
    }
  }, [usersData.length, dispatch]);

  return (
    <>
      <Header />
      {isUsersLoading ? <Loader /> : <UsersList />}
    </>
  );
};

export { UsersPage };
