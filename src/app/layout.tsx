import type { Metadata } from 'next'
import './styles/globals.scss'
import Providers from './providers'

// Мета-информация сайта
export const metadata: Metadata = {
  title: 'Currency Panel 💸. Текущие курсы валют.',
  description: 'Отслеживай курсы валют в реальном времени',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
