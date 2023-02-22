import { MouseEvent } from 'react';
import { Button, IconBag } from '../styles/components/CheckoutButton'

interface CheckoutButtonProps {
    variant?: 'primary' | 'secondary' 
    size?: 'md' | 'lg'      
}

export function CheckoutButton({variant = 'primary', size='md'}: CheckoutButtonProps){
    function handleClick(event: MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        console.log('Click')
    }
    
    return(
        <Button color={variant} size={size} onClick={handleClick}>
            {variant === 'primary' ? <IconBag color={'gray'} /> : <IconBag color={'white'} />}
        </Button>
    )
}