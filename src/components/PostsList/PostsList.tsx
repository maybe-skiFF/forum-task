import { useSelector } from 'react-redux';
import { PostItem } from '../PostItem/PostItem';
import styles from './PostsList.module.css';
import { RootState } from '../../redux/store';
import { IPost } from '../../interfaces/index';

const PostsList = () => {
  const postsData = useSelector(
    (state: RootState) => state.postsData.postsData,
  );

  return (
    <div className={styles.postsListContainer}>
      <p className={styles.title}>Posts</p>
      <div className={styles.postsWrapper}>
        {postsData.map((post: IPost) => (
          <PostItem postData={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export { PostsList };
