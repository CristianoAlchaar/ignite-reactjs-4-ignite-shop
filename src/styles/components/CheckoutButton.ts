import { styled } from '../index'
import { HiOutlineShoppingBag } from 'react-icons/hi'

export const Button = styled('button',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    borderWidth: 0,

    variants: {
        color:{
            'primary': {
                backgroundColor: '$gray800',
            },
            'secondary':{
                backgroundColor: '$green500'
            }
        },
        size: {
            'md': {
                padding: '12px',
                width: '48px',
                height: '48px',
            },
            'lg':{
                width: '56px',
                height: '56px',
            }
        } 
    },

    '&:hover': {
        filter: 'brightness(80%)',
        transition: 'filter 0.4s',
    }
})

export const IconBag = styled(HiOutlineShoppingBag, {
    width: '24px',
    height: '24px',
    variants: {
        color: {
            gray: {
                color: '#8D8D99'
            },
            white: {
                color: '$white'
            }
        }
    }
})