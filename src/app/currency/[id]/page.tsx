'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/Header';
import useCurrency from '@/app/Hooks/useCurrency';
import { use } from 'react';
import Link from 'next/link';
import '../../styles/Currency.scss'

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const { dataCurrency, isLoadingCurrency, isErrorCurrency } = useCurrency(id);

  useEffect(() => {
    if (dataCurrency?.base) {
      document.title = 'Валюта: ' + dataCurrency.base;
    }
  }, [dataCurrency?.base]);
  
  

  if (isLoadingCurrency) return <p>Загрузка...</p>;
  if (isErrorCurrency || !dataCurrency) return <p>Ошибка загрузки данных</p>;

  return (
    <>
      <Header />
      <main>
        <h1>Курс 1 {dataCurrency.base} на {dataCurrency.date}</h1>
        <ul style={{listStyleType: 'none',}}>
          {Object.entries(dataCurrency.rates).map(([currency, rate]) => (
            <li key={currency}>
              <h4>{currency}: {rate}</h4>
            </li>
          ))}
        </ul>
        <Link href='/'><button>Назад</button></Link>
      </main>
    </>
  );
}
