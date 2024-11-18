import { useSelector } from 'react-redux';
import { PostItem } from '../PostItem/PostItem';
import styles from './PostsList.module.css';
import { RootState } from '../../redux/store';
import { IPost } from '../../interfaces/index';
import { UsersListDropdown } from '../UsersListDropdown/UsersListDropdown';
import { PostForm } from '../PostForm/PostForm';

const PostsList = () => {
  const postsData = useSelector(
    (state: RootState) => state.postsData.postsData,
  );

  const usersData = useSelector(
    (state: RootState) => state.usersData.usersData,
  );

  return (
    <div className={styles.postsListContainer}>
      <p className={styles.title}>Posts</p>
      <UsersListDropdown usersData={usersData} />
      <PostForm />
      <div className={styles.postsWrapper}>
        {postsData.map((post: IPost) => (
          <PostItem postData={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export { PostsList };
