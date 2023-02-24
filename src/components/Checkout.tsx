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
    const { cartDetails, cartCount } = useShoppingCart()
    const [chartTotalPrice, setChartTotalPrice] = useState('0')

    function handleExitClick(){
        onClick()
    }

    function handleBuyClick(){
        console.log(cartDetails)
    }

    function changeTotalPrice(){
        if(cartDetails){
            const totalPrice = Object.values(cartDetails).reduce((total, product) => {
            const price = Number(product.price.replace('R$', '').replace(',', '.'))
            return total + (price * product.quantity); // multiply the price by the quantity and add it to the total
            }, 0);

            setChartTotalPrice(totalPrice.toFixed(2))
        }else{
            setChartTotalPrice('0.00')
        } 
      }
    
      useEffect(() => {
        changeTotalPrice()
      }, [cartDetails])
      
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
                            price={product.price} 
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
                    <TotalPriceValue>R$ {chartTotalPrice}</TotalPriceValue>
                </div>
                <Button title='Finalizar compra' onClick={handleBuyClick}/>
            </footer>
        </CheckoutContainer>
    )
}