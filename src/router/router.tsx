import { createBrowserRouter } from 'react-router-dom';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import { PostsPage } from '../pages/PostsPage/PostsPage';

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
