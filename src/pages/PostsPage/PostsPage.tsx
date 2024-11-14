import { useDispatch } from 'react-redux';
import { Header } from '../../components/Header/Header';
import { PostsList } from '../../components/PostsList/PostsList';
import { useEffect } from 'react';
import { getPosts } from '../../services/api';
import { setPostsToStore } from '../../redux/postsDataSlice';

const PostsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts()
      .then(data => dispatch(setPostsToStore(data)))
      .catch(err => console.error(err));
  });

  return (
    <>
      <Header />
      <PostsList />
    </>
  );
};

export { PostsPage };
