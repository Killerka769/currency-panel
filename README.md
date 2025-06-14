⚠️ **Внимание:** если вы находитесь в России, сайт может не загружаться без VPN. Это связано с блокировками некоторых CDN, которые использует Vercel. Рекомендуется использовать VPN, чтобы обойти возможные сетевые ограничения.

# 💱 Currency Panel — Панель курсов валют в реальном времени 🚀

## 🧾 Описание

**Currency Panel** — это современное 🌐 Next.js-приложение для просмотра курса популярных валют в реальном времени.  
Полностью написано на **TypeScript**, с использованием **React Query** и **Zustand**, а стили оформлены через **SASS** для максимальной гибкости.

📡 Валюты обновляются динамически, интерфейс адаптивный, быстрый и отзывчивый.  
🔐 Для приватных маршрутов реализована защита через компонент `ProtectedRoute`, который проверяет наличие токена в Zustand и перенаправляет неавторизованных пользователей на `/login`.  
💡 Пока токен загружается, показывается индикатор загрузки.

---

## 🛠️ Технологии и фишки

| 🚀 Технология           | 💡 Использование                                                                 |
|-------------------------|----------------------------------------------------------------------------------|
| 🖼️ Next.js (App Router)  | SSR + Static Export + маршрутизация с защитой (`ProtectedRoute`)               |
| 🌀 TypeScript            | Строгая типизация                                                              |
| 🎨 SASS                 | Стилизация и анимации                                                          |
| ⚡ Zustand              | Глобальное состояние (токен, темы, валюты)                                     |
| 🔁 React Query          | Получение, кэш и управление данными                                             |
| 📦 Vercel               | Автоматический деплой и хостинг                                                |
| 🔧 Git + GitHub         | Контроль версий, история изменений                                             |

---

## 📲 Возможности

- 🔄 Получение актуального курса валют (USD, EUR и др.)
- 🧭 Динамические страницы под каждую валюту:  
  `https://currency-panel-xi.vercel.app/currency/USD`
- 🔐 Защита приватных маршрутов через токен
- 📱 Полная адаптивность под все устройства
- ⚡ Высокая скорость за счёт `output: export` и статического экспорта

---

## 🔐 Авторизация в Fake Store API

Для входа используется API 👉 [https://fakestoreapi.com](https://fakestoreapi.com)

📌 **Рабочие данные из документации:**

    ```json
    {
      "username": "mor_2314",
      "password": "83r5^_"
    }

После входа вы получаете JWT токен, который сохраняется в Zustand и используется для доступа к защищённым маршрутам (ProtectedRoute).

---

## Как запустить локально

    ```bash
    git clone https://github.com/Killerka769/currency-panel.git
    cd currency-panel
    npm install
    npm run dev

## 📦 Деплой

Проект задеплоен на [Vercel](https://vercel.com)

🔗 **Онлайн-демо:** [currency-panel-xi.vercel.app](https://currency-panel-xi.vercel.app)
