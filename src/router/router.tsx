import { createBrowserRouter } from 'react-router-dom';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { PostsPage } from '../pages/PostsPage/PostsPage';
import { FavoritesPage } from '../pages/FavoritesPage/FavoritesPage';
import { DetailedPostPage } from '../pages/DetailedPostPage/DetailedPostPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <UsersPage />,
    },
    {
      path: '/posts',
      element: <PostsPage />,
    },
    {
      path: '/favorites',
      element: <FavoritesPage />,
    },
    {
      path: 'posts/post/:key',
      element: <DetailedPostPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export { router };
