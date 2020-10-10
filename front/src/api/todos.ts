// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebase from 'firebase';
import 'firebase/firestore';

export interface ToDo {
  id: string;
  title: string;
  detail: string;
  update_at: string;
  create_at: string;
}

/**
 * Todoリストを取得するAPI
 * @param uid
 * @param idToken
 * @example
 * ```javascript
 * // on React
 * function Sample() {
 *    const {user} = useAuth();
 *    useEffect(() => {
 *      const progress = async () => {
 *        const idToken = await user.getIdToken();
 *        const todos = await fetchTodos(user.uid, idToken);
 *        // ...any code
 *      }
 *    })
 * }
 *
 * ```
 */
export const fetchTodos = (uid: string, idToken: string) => {
  return fetch(`${process.env.API_SERVICE_URL}/tyotos/users/${uid}/todos`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });
};

export default data;
