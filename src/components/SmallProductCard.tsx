import { useShoppingCart } from 'use-shopping-cart'
import Image from "next/image"
import { CardContainer, CardPrice, QuantityP, RemoveSpn } from "../styles/components/SmallProductCard"

interface SmallProductCardProps {
    id: string
    title: string
    price: number
    quantity: number
    imgUrl : string
}

export function SmallProducCard({id, title, price, quantity, imgUrl} : SmallProductCardProps){

    const formattedPrice = price.toString().replace('R$', '').replace(',', '.');
    const total = (parseInt(formattedPrice) * quantity).toFixed(2);

    const { removeItem } = useShoppingCart()

    function handleRemove(){
        removeItem(id)
    }

    return (
        <CardContainer>
            <Image width={101} height={93} src={imgUrl} alt="Camisa maneira" style={{
                background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}/>
            <div>
                <h4>{title}</h4> 
                <QuantityP>Quantidade: {quantity}</QuantityP>
                <CardPrice>R$ {total}</CardPrice>
                <RemoveSpn onClick={handleRemove}>Remover</RemoveSpn>
            </div>
        </CardContainer>
    )
}