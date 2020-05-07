import Head from 'next/head'
import '@styles/app.css'
import { AppLayout } from '@components/display'

export default function CustomApp({
  Component,
  pageProps
}) {
  return (
    <AppLayout>
      <Head>
        <title>Strapi Adventure</title>
      </Head>
      <Component {...pageProps} />
    </AppLayout>
  )
}
