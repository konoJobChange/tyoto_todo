// modules
import useSWR from 'swr';
import { ToDo } from 'src/api/todos';

const withAuthFetcher = async (endPoint: string, user: firebase.User) => {
  const idToken = await user.getIdToken();
  return await fetch(endPoint, {
    headers: { Authorization: `Bearer ${idToken}` },
  }).then((r) => r.json());
};

export const useHoge = (
  user: firebase.User,
): {
  list: ToDo[];
  mutate: () => {};
} => {
  const key = [`${process.env.API_SERVICE_URL}/users/${user.uid}/todos`, user];
  const { data, mutate } = useSWR<ToDo[]>(key, withAuthFetcher);
  const list = data || [];
  return { list, mutate };
};

export const useDetail = (
  qid: string,
  user: firebase.User,
): ToDo | undefined => {
  const key = [
    `${process.env.API_SERVICE_URL}/users/${user.uid}/todos/${qid}`,
    user,
  ];
  const { data } = useSWR<ToDo>(key, withAuthFetcher);
  const detail = data;
  return detail;
};
