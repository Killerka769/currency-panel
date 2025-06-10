import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Тип для объекта курсов валют, где ключ — код валюты, значение — курс
interface CurrencyRates {
  [key: string]: number;
}

// Тип для данных, которые возвращает API о валюте
interface CurrencyInfo {
  amount: number;     // Кол-во базовой валюты (обычно 1)
  base: string;       // Базовая валюта, от которой считаются курсы
  date: string;       // Дата актуальности курсов
  rates: CurrencyRates; // Объект с курсами валют (ключ — код валюты, значение — курс)
}

// Функция, которая делает запрос к API и получает данные о валюте
const fetchCurrencyInfo = async (code: string): Promise<CurrencyInfo> => {
  const response = await axios.get(`https://api.frankfurter.app/latest?from=${code}`);
  return response.data; // Возвращаем только нужные данные из ответа
};

// Сам кастомный хук для получения курса валюты
const useCurrency = (code: string) => {
  // useQuery — хук из react-query для запросов и кеширования данных
  const { data, isLoading, isError, refetch } = useQuery<CurrencyInfo, Error>({
    queryKey: ['currencyInfo', code],       // Уникальный ключ для кеша (зависит от кода валюты)
    queryFn: () => fetchCurrencyInfo(code), // Функция для получения данных
    enabled: !!code,                        // Запрос запускается только если есть валидный код валюты
    staleTime: 1000 * 60 * 5,               // Время в миллисекундах, пока данные считаются свежими (5 минут)
    cacheTime: 1000 * 60 * 10,              // Время хранения кеша (10 минут)
    refetchOnWindowFocus: false,             // Отключаем автоматический рефетч при фокусе окна
  });

  // Возвращаем удобный объект с данными и состояниями запроса
  return {
    dataCurrency: data,            // Данные с курсами и инфо о валюте
    isLoadingCurrency: isLoading,  // Индикатор загрузки
    isErrorCurrency: isError,      // Индикатор ошибки
    refetchCurrency: refetch,      // Функция для ручного повторного запроса
  };
};

export default useCurrency;
