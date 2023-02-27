import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ContainerOfImages, ImageContainer, SuccessContainer } from "../styles/pages/success";
import { useShoppingCart } from 'use-shopping-cart';
import { useEffect, useState } from "react";
import { CartDetails } from "use-shopping-cart/core";

export default function Success() {
  
  const { cartDetails, clearCart, cartCount } = useShoppingCart()

  const [boughtItems, setBoughtItems] = useState<CartDetails>()
  const [bouthgItemsCount, setBouthgItemsCount] = useState(0)

  useEffect(() => {
    setBoughtItems(cartDetails)
    setBouthgItemsCount(cartCount!)
    clearCart()
  },[])
   
   return boughtItems ? (
    <>
      <Head>
        <title>Compra efetuada | IgniteShop</title>
        <meta name="robots" content="noindex"/>
      </Head>
  
      <SuccessContainer>
        <ContainerOfImages>
          {Object.values(boughtItems).map(item => (
            <ImageContainer key={item.id}>
              <Image src={item.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ContainerOfImages>
  
        <h1>Compra efetuada!</h1>
  
        <p>
          Uhuul! Sua compra de {bouthgItemsCount} camiseta&#40;s&#41; já está a caminho da sua casa
        </p>
  
        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  ) : (
    <Head>
      <title>Loading</title>
    </Head>
  )
}
