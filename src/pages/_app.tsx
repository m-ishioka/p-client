import '../styles/global.css'
import 'github-markdown-css'

import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

const interVariable = Inter()

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <main className={interVariable.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
