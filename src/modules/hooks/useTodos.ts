// modules
import firebase from 'firebase';
import useSWR, { mutate } from 'swr';
import { ToDo } from 'src/modules/todos';

// fetcher
const withAuthFetcher = async (endPoint: string, user: firebase.User) => {
  const idToken = await user.getIdToken();
  return await fetch(endPoint, {
    headers: { Authorization: `Bearer ${idToken}` },
  }).then((r) => r.json());
};

const withAuthCreator = async (
  endPoint: string,
  user: firebase.User,
  method: 'POST' | 'PATCH',
  body: Pick<ToDo, 'title' | 'detail'>,
) => {
  const idToken = await user.getIdToken();
  return await fetch(endPoint, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify(body),
  }).then(async (r) => await r.json());
};

// use系
export const useHoge = (user: firebase.User) => {
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
  return data;
};

export const useUpdate = async (
  title: string,
  detail: string,
  user: firebase.User,
): Promise<ToDo> => {
  const endPoint = `${process.env.API_SERVICE_URL}/users/${user.uid}/todos`;
  const data = await mutate(endPoint, async () => {
    return await withAuthCreator(endPoint, user, 'POST', {
      title,
      detail,
    });
  });
  return data;
};
