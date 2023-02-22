import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "../styles/components/Button";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    title: string,
    disabled?: boolean,    
}

export function Button ({ title, disabled = false, ...rest }: ButtonProps){
    return (
        <ButtonContainer disabled={disabled} onClick={rest.onClick}>
            {title}
        </ButtonContainer>
    )
}