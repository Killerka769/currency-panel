import type { Metadata } from 'next'

// Мета-информация сайта
export const metadata: Metadata = {
  title: 'Авторизация',
  description: 'Авторизация пользователя',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
          {children}
      </body>
    </html>
  )
}
