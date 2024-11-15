import styles from './FavoritesPostList.module.css';

const FavoritesPostList = () => {
  return (
    <div className={styles.favoritesPostsListContainer}>
      <p className={styles.title}>FavoritesPosts</p>
      <div className={styles.postsWrapper}>
        {/* {postsData.map((post: IPost) => (
          <PostItem postData={post} key={post.id} />
        ))} */}
        POST
      </div>
    </div>
  );
};

export { FavoritesPostList };
