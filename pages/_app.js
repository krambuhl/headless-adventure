import Head from 'next/head'
import '@styles/app.css'
import { AppLayout, PublishStatusIndicator } from '@components/display'

export default function CustomApp({
  Component,
  pageProps
}) {
  return (
    <AppLayout>
      <Head>
        <title>Headless Adventure</title>
      </Head>

      <PublishStatusIndicator {...pageProps} />
      <Component {...pageProps} />
    </AppLayout>
  )
}
