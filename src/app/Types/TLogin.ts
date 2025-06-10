// Только то, что отправляется
export type TLogin = {
    username: string;
    password: string;
  }
  
  // То, что возвращается с сервера
export type TLoginResponse = {
    token: string;
  }
  