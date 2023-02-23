import Image from "next/image"
import shirtImg from "../assets/tshirt.png"
import { CardContainer, CardPrice, RemoveSpn } from "../styles/components/SmallProductCard"

export function SmallProducCard(){
    return (
        <CardContainer>
            <Image width={101} height={93} src={shirtImg} alt="Camisa maneira" style={{
                background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}/>
            <div>
                <h4>Camiseta beyond the Limits</h4>
                <CardPrice>R$ 79,90</CardPrice>
                <RemoveSpn>Remover</RemoveSpn>
            </div>
        </CardContainer>
    )
}