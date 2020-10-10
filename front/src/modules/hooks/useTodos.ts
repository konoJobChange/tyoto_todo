// modules
import useSWR from 'swr';
import { ToDo } from 'src/api/todos';

const withAuthFetcher = async (endPoint: string, user: firebase.User) => {
  const idToken = await user.getIdToken();
  return await fetch(endPoint, {
    headers: { Authorization: `Bearer ${idToken}` },
  }).then((r) => r.json());
};

export const useHoge = (user: firebase.User): ToDo[] => {
  const { data } = useSWR<ToDo[]>(
    [`${process.env.API_SERVICE_URL}/users/${user.uid}/todos`, user],
    withAuthFetcher,
  );
  return data || [];
};
