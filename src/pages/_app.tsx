import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Image from 'next/image'
import { CheckoutButton } from '../components/CheckoutButton'
import { Checkout } from '../components/Checkout'
import { useState } from 'react'
import { CartProvider } from 'use-shopping-cart'

globalStyles() // its better here

export default function App({ Component, pageProps }: AppProps) {
  const [isCheckoutOpened, setIsCheckoutOpened] = useState(false)

  function changeCheckOutStatus(){
    isCheckoutOpened ? setIsCheckoutOpened(false) : setIsCheckoutOpened(true)
  }
  return (
    <Container>
      <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
        successUrl="http://localhost:3000/success"
        cancelUrl="http://localhost:3000/canceled"
        currency="BRL"
        allowedCountries={['BR']}
        billingAddressCollection={false}
        shouldPersist
      >
        <Header>
          <Image src={logoImg} alt=""/>
          <CheckoutButton onClick={changeCheckOutStatus}/>
        </Header>
        <Checkout isToggled={isCheckoutOpened} onClick={changeCheckOutStatus}/>
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  ) 
}
