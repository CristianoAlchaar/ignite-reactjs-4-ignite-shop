import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe"
import { HomeContainer, Product } from "../styles/pages/home"
import { CheckoutButton } from "../components/CheckoutButton"
import 'keen-slider/keen-slider.min.css'
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

interface HomeProps{
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    priceId: string
    priceWithoutFormat: number
  }[]
}

interface TypeProductToBeAdded{
  id: string
  name: string
  imageUrl: string
  price: string
  priceId: string
  priceWithoutFormat: number
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48,
    }
  })

  function handleAddNewProduct(product: TypeProductToBeAdded) {
    addItem({
      id: product.priceId,
      name: product.name,
      imageUrl: product.imageUrl,
      //useShoppingCart works better with price without 
      //format, by default is decimal, example 74,90 is 7490 without format
      price: product.priceWithoutFormat,
      price_id: product.priceId,
      currency: 'BRL',     
    })
  }

  return (
    <>
      <Head>
        <title>Home IgniteShop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt=""/>
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <CheckoutButton variant="secondary" size="lg" onClick={() => handleAddNewProduct(product)}/>
                </footer>
              </Product>
            </Link>
            )
        })}
          
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product =>{
    const price = product.default_price as Stripe.Price
    return{
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
      priceWithoutFormat: price.unit_amount,
      priceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}