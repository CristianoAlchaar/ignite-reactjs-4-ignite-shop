import { MouseEvent } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { Button } from '../components/Button'
import { CheckoutContainer, ContainerOfSmallCard, ExitButton, NumberItens, TotalPrice, TotalPriceValue } from '../styles/components/Checkout'
import { SmallProducCard } from './SmallProductCard'

export function Checkout(){
    function handleExitClick(){
        console.log('Sair')
    }

    return(
        <CheckoutContainer>
            <ExitButton onClick={handleExitClick}/> 
            <header>
                <h3>Sacola de Compras</h3>    
            </header>
            <ContainerOfSmallCard>
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
                <SmallProducCard />
            </ContainerOfSmallCard>
            <footer>
                <div>
                    <p>Quantidade</p>
                    <NumberItens>3 ítens</NumberItens>
                </div>
                <div>
                    <TotalPrice>Valor total</TotalPrice>
                    <TotalPriceValue>R$ 270,00</TotalPriceValue>
                </div>
                <Button title='Finalizar compra'/>
            </footer>
        </CheckoutContainer>
    )
}