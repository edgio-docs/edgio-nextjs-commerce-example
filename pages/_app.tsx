import '@assets/main.css'
import 'keen-slider/keen-slider.min.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

import { ManagedUIContext } from '@components/ui/context'
import { Head } from '@components/common'

import { configure } from '@layer0/prefetch/window/prefetch'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    // skip prefetch throttling entirely
    configure({ forcePrefetchRatio: 1 })
  })

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}
