import { MouseEvent, useState, useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from '../components/Button'
import { CheckoutContainer, ContainerOfSmallCard, ExitButton, NumberItens, TotalPrice, TotalPriceValue } from '../styles/components/Checkout'
import { SmallProducCard } from './SmallProductCard'

interface CheckoutProps{
    isToggled?: boolean
    onClick: () => void;
}

export function Checkout({ isToggled = false, onClick } : CheckoutProps){
    const { cartDetails, cartCount, redirectToCheckout, totalPrice } = useShoppingCart()

    const [ isLoading, setIsLoading ] = useState(false)
    const [status, setStatus] = useState('idle')

    function handleExitClick(){
        onClick()
    }

    async function handleBuyClick(){
        if (cartCount! > 0) {
            setStatus('idle')
            try {
              setIsLoading(true)
              const result = await redirectToCheckout()
              if (result?.error) {
                console.error(result)
                setStatus('redirect-error')
              }
            } catch (error) {
              console.error(error)
              setStatus('redirect-error')
            } finally{
                setIsLoading(false)
            }
        } else {
            setStatus('missing-items')
        }
    }

    return(
        <CheckoutContainer style={isToggled ? { right: 0 } : { right: '-485px' }}>
            <ExitButton onClick={handleExitClick}/> 
            <header>
                <h3>Sacola de Compras</h3>    
            </header>
            <ContainerOfSmallCard> 
                {cartDetails 
                    && Object.values(cartDetails).map(product => (
                        <SmallProducCard 
                            price={product.formattedValue} 
                            quantity={product.quantity} 
                            title={product.name} 
                            key={product.id}
                            id={product.id}
                            imgUrl= {product.imageUrl}
                        />
                    ))
                }
            </ContainerOfSmallCard>
            <footer>
                <div>
                    <p>Quantidade</p>
                    <NumberItens>{cartCount}</NumberItens>
                </div>
                <div>
                    <TotalPrice>Valor total</TotalPrice>
                    <TotalPriceValue>R$ {(totalPrice! / 100).toFixed(2)}</TotalPriceValue>
                </div>
                {isLoading ? 
                    <Button title='Finalizar compra' disabled onClick={() => handleBuyClick()}/> :
                    <Button title='Finalizar compra' onClick={() => handleBuyClick()} />
                }
            </footer>
        </CheckoutContainer>
    )
}