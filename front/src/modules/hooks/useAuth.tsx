import { useRouter } from 'next/router';
import firebase from 'firebase';
import 'firebase/auth';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LinearProgress } from '@material-ui/core';
import Login from 'src/components/Login';

type AsyncVoid = () => Promise<void>;
const AuthContext = createContext<{
  login: AsyncVoid;
  logout: AsyncVoid;
  user: firebase.User;
}>({
  login: () => Promise.reject('not implements'),
  logout: () => Promise.reject('not implements'),
  get user(): firebase.User {
    throw new Error('not implements');
  },
});

export function AuthProvider({ children }: { children: any }) {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    let isMount = true;
    async function loadAuthSate() {
      const currentUser = firebase.auth().currentUser;
      if (isMount) {
        if (currentUser) setUser(currentUser);
        setLoading(false);
      }
    }
    loadAuthSate();
    return () => {
      isMount = false;
    };
  }, []);

  const login = useCallback(async () => {
    router.push('/login');
  }, []);

  const logout = useCallback(async () => {
    await firebase.auth().signOut();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <div>
      {user ? (
        <AuthContext.Provider value={{ login, logout, user }}>
          {children}
        </AuthContext.Provider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export const useAuth = () => useContext(AuthContext);
