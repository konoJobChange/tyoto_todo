import { useRouter } from 'next/router';
import firebase from 'firebase';
import 'firebase/auth';
import {
  ComponentType,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { LinearProgress } from '@material-ui/core';

type AsyncVoid = () => Promise<void>;
const AuthContext = createContext<{
  login: AsyncVoid;
  logout: AsyncVoid;
  user: firebase.User | null;
}>({
  login: () => Promise.reject('not implements'),
  logout: () => Promise.reject('not implements'),
  user: null,
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
    router.replace('/login');
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
