import React from 'react'
import '../styles/Header.scss'
import { BsCoin } from 'react-icons/bs'
import Link from 'next/link'
import useStoreToken from '../Store/Store'
import { useRouter } from 'next/navigation'


const Header = () => {
  const token = useStoreToken(e=>e.token);
  const router = useRouter();
  const deleteToken = useStoreToken(e=>e.deleteToken);
  const handleLogout = () => {
    deleteToken();
    router.replace('/login');
  };
  return (
    <header>
        <div className='containerLogo'>
        <BsCoin color='gold' size={50} />
        <h1>Курс валют</h1>
        </div>
        {token ? (<button onClick={handleLogout}>Выйти</button>) : (<Link href='/login'><button>Войти</button></Link>)}
    </header>
  )
}

export default Header;