import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useStoreToken from '../Store/Store';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useStoreToken((state) => state.token);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ждём, пока Zustand загрузит состояние из localStorage
    if (token !== null) {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!isLoading && !token) {
      router.replace('/login');
    }
  }, [isLoading, token, router]);

  if (isLoading) return <h1>Загрузка...</h1>; // или <Loader /> — показываем пока идёт загрузка

  return <>{children}</>;
};

export default ProtectedRoute;
