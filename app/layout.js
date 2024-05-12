import { Inter } from 'next/font/google'
import './globals.css'

import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LocalFrame : Moments Around You',
  favicon: '/public/favicon.png',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}