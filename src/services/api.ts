import { PATHS } from '../constants/PATHS';
import { IComment, IPost, IUser } from '../interfaces';

async function loaderWrapper<T>(
  apiCall: () => Promise<T>,
  setLoading: (loading: boolean) => void,
): Promise<T> {
  try {
    setLoading(true);
    return await apiCall();
  } catch (err) {
    throw new Error(`API Call error: ${String(err)}`);
  } finally {
    setLoading(false);
  }
}

async function getUsers(
  setLoading: (loading: boolean) => void,
): Promise<IUser[]> {
  return loaderWrapper(async () => {
    const resp = await fetch(`${PATHS.BASE_URL}users`);

    return (await resp.json()) as IUser[];
  }, setLoading);
}

async function getUser(
  userId: string | undefined,
  setLoading: (loading: boolean) => void,
): Promise<IUser> {
  // try {
  //   const resp = await fetch(`${PATHS.BASE_URL}users/${userId}`);

  //   return (await resp.json()) as IUser;
  // } catch (err) {
  //   throw new Error(`GET Response error: ${String(err)}`);
  // }
  return loaderWrapper(async () => {
    const resp = await fetch(`${PATHS.BASE_URL}users/${userId}`);

    return (await resp.json()) as IUser;
  }, setLoading);
}

async function getPosts(
  setLoading: (loading: boolean) => void,
): Promise<IPost[]> {
  return loaderWrapper(async () => {
    const resp = await fetch(`${PATHS.BASE_URL}posts`);

    return (await resp.json()) as IPost[];
  }, setLoading);
}

async function getPostsById(userId: number | undefined): Promise<IPost[]> {
  try {
    const resp = await fetch(`${PATHS.BASE_URL}posts?userId=${userId}`);

    return (await resp.json()) as IPost[];
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

async function getPostById(
  postId: number,
  setLoading: (loading: boolean) => void,
): Promise<IPost> {
  return loaderWrapper(async () => {
    const resp = await fetch(`${PATHS.BASE_URL}posts/${postId}`);

    return (await resp.json()) as IPost;
  }, setLoading);
}

async function getCommentsByPostId(postId: number): Promise<IComment[]> {
  try {
    const resp = await fetch(`${PATHS.BASE_URL}comments?postId=${postId}`);

    return (await resp.json()) as IComment[];
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

async function deletePost(postId: number): Promise<void> {
  try {
    await fetch(`${PATHS.BASE_URL}posts/${postId}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error(`DELETE error: ${String(err)}`);
  }
}

async function createPost(post: IPost): Promise<void> {
  try {
    await fetch(`${PATHS.BASE_URL}posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (err) {
    throw new Error(`POST Create post error: ${String(err)}`);
  }
}

async function updateUserData(
  user: IUser,
  userId: string | undefined,
): Promise<void> {
  try {
    await fetch(`${PATHS.BASE_URL}users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  } catch (err) {
    throw new Error(`PUT Update user error: ${String(err)}`);
  }
}

export {
  getUsers,
  getPosts,
  getPostsById,
  deletePost,
  getPostById,
  getCommentsByPostId,
  createPost,
  getUser,
  updateUserData,
};
