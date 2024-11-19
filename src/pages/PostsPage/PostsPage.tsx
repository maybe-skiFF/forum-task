import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { PostsList } from '../../components/PostsList/PostsList';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/api';
import { setPostsToStore } from '../../redux/postsDataSlice';
import { Loader } from '../../components/Loader/Loader';

const PostsPage = () => {
  const dispatch = useDispatch();
  const [isPostsLoading, setIsPostsLoading] = useState<boolean>(false);

  useEffect(() => {
    getPosts(setIsPostsLoading)
      .then(data => dispatch(setPostsToStore(data)))
      .catch(err => console.error(err));
  }, [dispatch]);

  return (
    <>
      <Header />
      {isPostsLoading ? <Loader /> : <PostsList />}
    </>
  );
};

export { PostsPage };
