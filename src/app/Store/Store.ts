import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TStoreToken = {
  token: string | null;
  setToken: (token: string) => void;
  deleteToken: () => void;
};

const useStoreToken = create<TStoreToken>()(
  persist(
    (set) => ({
      token: '',
      setToken: (token: string) => set({ token }),
      deleteToken: () => set({ token: '' }),
    }),
    {
      name: 'auth-token',
    }
  )
);

export default useStoreToken;
