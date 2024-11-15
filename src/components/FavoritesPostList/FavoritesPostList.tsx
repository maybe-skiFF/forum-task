import { useSelector } from 'react-redux';
import styles from './FavoritesPostList.module.css';
import { RootState } from '../../redux/store';
import { IPost } from '../../interfaces/index';
import { PostItem } from '../PostItem/PostItem';

const FavoritesPostList = () => {
  const favoritesPosts = useSelector(
    (state: RootState) => state.favoritesPosts.favoritesPosts,
  );

  return (
    <div className={styles.favoritesPostsListContainer}>
      <p className={styles.title}>FavoritesPosts</p>
      <div className={styles.postsWrapper}>
        {favoritesPosts.length ? (
          favoritesPosts.map((post: IPost) => (
            <PostItem postData={post} key={post.id} />
          ))
        ) : (
          <p className={styles.emptyMsg}>Favorite posts is empty...</p>
        )}
      </div>
    </div>
  );
};

export { FavoritesPostList };
