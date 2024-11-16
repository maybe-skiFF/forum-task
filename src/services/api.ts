import { PATHS } from '../constants/PATHS';
import { IPost, IUser } from '../interfaces';

async function getUsers(): Promise<IUser[]> {
  try {
    const resp = await fetch(`${PATHS.BASE_URL}users`);

    return (await resp.json()) as IUser[];
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

async function getPosts(): Promise<IPost[]> {
  try {
    const resp = await fetch(`${PATHS.BASE_URL}posts`);

    return (await resp.json()) as IPost[];
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

async function getPostsById(userId: number): Promise<IPost[]> {
  try {
    const resp = await fetch(`${PATHS.BASE_URL}posts?userId=${userId}`);

    return (await resp.json()) as IPost[];
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

async function getPostById(postId: number): Promise<IPost> {
  try {
    const resp = await fetch(`${PATHS.BASE_URL}posts/${postId}`);

    return (await resp.json()) as IPost;
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

export { getUsers, getPosts, getPostsById, deletePost, getPostById };
