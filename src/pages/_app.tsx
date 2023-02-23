import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { CheckoutButton } from '../components/CheckoutButton'
import { Checkout } from '../components/Checkout'
import { useState } from 'react'

globalStyles() // its better here

export default function App({ Component, pageProps }: AppProps) {
  const [isCheckoutOpened, setIsCheckoutOpened] = useState(false)

  function changeCheckOutStatus(){
    isCheckoutOpened ? setIsCheckoutOpened(false) : setIsCheckoutOpened(true)
  }

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt=""/>
        <CheckoutButton onClick={changeCheckOutStatus}/>
      </Header>
      <Checkout isToggled={isCheckoutOpened} onClick={changeCheckOutStatus}/>
      <Component {...pageProps} />
    </Container>
  ) 
}
