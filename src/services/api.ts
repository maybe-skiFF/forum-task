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

export { getUsers, getPosts };
