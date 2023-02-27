import { Button } from "@/src/components/Button"
import { stripe } from "@/src/lib/stripe"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useShoppingCart } from 'use-shopping-cart'
import Stripe from "stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products"

interface ProductProps{
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    priceWithoutFormat: number
  }
}

export default function Product({product}: ProductProps) {
    const { isFallback } = useRouter()

    const { addItem } = useShoppingCart()

    async function handleBuyProduct(){
      addItem({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        //useShoppingCart works better with price without 
        //format, by default is decimal, example 74,90 is 7490 without format
        price: product.priceWithoutFormat,
        price_id: product.defaultPriceId,
        currency: 'BRL', 
      })
    }

    if(isFallback) {
      return<p>Loading...</p>
    }

    return(
      <>
        <Head>
          <title>{product.name} | IgniteShop</title>
        </Head>
        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt=""/>
          </ImageContainer>
          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.price}</span>

            <p>{product.description}</p>

            <Button title="Colocar na sacola" onClick={handleBuyProduct}>Comprar agora</Button>
          </ProductDetails>
        </ProductContainer>
      </>
    )
  }

  export const getStaticPaths: GetStaticPaths = async() => {
    return{
      paths: [
        {params: { id: 'prod_NBijYEFLkMwQeH'} }
      ],
      fallback: true, //i could use blocking instead, however is better this way i did. 
    }    
  }

  export const getStaticProps : GetStaticProps<any, {id: string}> = async( { params } ) => {
    const productId = params!.id //i added that !

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    })
    
    const price = product.default_price as Stripe.Price;

    return{
      props:{
        product: {
          id: price.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price.unit_amount != null ? price.unit_amount / 100 : 0), //made that thernary condition here
          description: product.description,
          defaultPriceId: price.id,
          priceWithoutFormat: price.unit_amount,
        }
      },
      //revalidate: 60 * 60 * 1 //1 hour
    }
  }
   