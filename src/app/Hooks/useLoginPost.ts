import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { TLogin, TLoginResponse } from "../Types/TLogin"
import useStoreToken from "../Store/Store"
import { useRouter } from "next/navigation"

function useLoginPost() {
  const setToken = useStoreToken(e => e.setToken);
  const router = useRouter();

  const { mutate, isError, isPending } = useMutation<TLoginResponse, Error, TLogin>({
    mutationFn: (credentials: TLogin) => {
      console.log('Пробуем логин с:', credentials);
      return axios.post<TLoginResponse>('https://fakestoreapi.com/auth/login', credentials)
        .then(res => res.data);
    },
    onSuccess: (data) => {
      setToken(data.token);
      router.push('/');
    }
  });

  return { mutateLogin: mutate, isErrorLogin: isError, isPendingLogin: isPending };
}

export default useLoginPost;
