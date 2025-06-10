'use client';

import Link from "next/link";
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import useCurrencies from "./Hooks/useCurrencies";
import './styles/Currencies.scss';

export default function Home() {
  const { currencies, currenciesLoading, currenciesError } = useCurrencies();

  if (currenciesLoading) return <p>Загрузка...</p>;
  if (currenciesError) return <p>Ошибка загрузки валют</p>;
  if (!currencies) return null;

  return (
    <ProtectedRoute>
      <Header />
      <main>
        <div className="containerCurrencies">
          <ul>
            {Object.entries(currencies).map(([code, name]) => (
              <li key={code}>
                <Link href={'/currency/' + code}>
                <h3>{code}</h3>
                <p>{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </ProtectedRoute>
  );
}
