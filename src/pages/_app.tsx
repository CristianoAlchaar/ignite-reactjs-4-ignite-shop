import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { CheckoutButton } from '../components/CheckoutButton'

globalStyles() // its better here

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
        <CheckoutButton/>
      </Header>

      <Component {...pageProps} />
    </Container>
  ) 
}
