import type { Metadata } from 'next'
import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SummerEffect from '@/components/effects/SummerEffect'
import ThemeProvider from '@/components/providers/ThemeProvider'
import CookieConsent from '@/components/ui/CookieConsent'
import ScrollToTop from '@/components/ui/ScrollToTop'

export const metadata: Metadata = {
  title: 'Шале-Тюлень - Премиум отдых в лесу с банями и купелями',
  description: 'Комфортабельные шале с баней и чаном. Идеальное место для уединения с природой.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SummerEffect />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

