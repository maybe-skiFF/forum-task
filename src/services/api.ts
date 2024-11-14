import { IUser } from '../interfaces';

async function getUsers(): Promise<IUser> {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');

    return (await resp.json()) as IUser;
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

export { getUsers };
