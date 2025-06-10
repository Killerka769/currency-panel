'use client'
import React, { useState } from 'react'
import Header from '../components/Header'
import '../styles/Login.scss'
import useLoginPost from '../Hooks/useLoginPost';

function Login() {
    const [ login,setLogin ] = useState('');
    const [ password,setPassword ] = useState('');

    const { mutateLogin, isErrorLogin, isPendingLogin } = useLoginPost();

    console.log(isErrorLogin);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() // ⛔️ отключаем перезагрузку
        console.log('Отправляем:', JSON.stringify({ email: login, password }));
        mutateLogin({
          username: login.trim(),
          password: password.trim(),
        })
      }

  return (
    <>
        <Header />
        <main>
            <div className='containerLogin'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='login'>Логин:</label>
                <input type='text' value={login} onChange={(e)=>setLogin(e.target.value)} id='login' maxLength={25} />
                <label htmlFor='password'>Пароль:</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='password' maxLength={35}/>
                {isErrorLogin && <p style={{color: 'red'}}>Неверный логин или пароль</p>}
                <button disabled={isPendingLogin}>{isPendingLogin ? 'Входим...' : 'ВОЙТИ'}</button>
            </form>
            </div>
        </main>
    </>
  )
}

export default Login