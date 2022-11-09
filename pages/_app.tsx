
/*
 * Copyright (c) 2022. Kevin Messali, all rights reserved.
 *
 */

import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
