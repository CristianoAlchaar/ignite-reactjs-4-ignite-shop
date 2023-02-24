import { styled, css } from '../index'
import { RxCross1 } from 'react-icons/rx'

export const CheckoutContainer = styled('div',{
    height: '100%',
    width: '29.6875rem',
    backgroundColor: '$gray800',
    position: 'absolute',
    right: '0',
    zIndex: 1000,
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    cursor: 'default',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'right 0.5s ease-out',

    h3:{
        fontSize: '$lg'
    },

    header:{
        height: '56px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: '32px',
    },

    footer:{
       div:{
        height:'34px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
       },
       
       p:{
        fontSize: '$md'
       },

       button: {
        marginTop: '55px'
       }
    }
});

export const ExitButton = styled(RxCross1,{
    width: '24px',
    height: '24px',
    position: 'absolute',
    right: '24px',
    top: '24px',

    '&:hover': {
        filter: 'brightness(80%)',
        transition: 'filter 0.2s',
    }
})

export const NumberItens = styled('span',{
    fontSize: '$lg'
})

export const TotalPrice = styled('span',{
    fontSize: '$lg',
    fontWeight: 'bold'
})

export const TotalPriceValue = styled('span',{
    fontSize: '$xl',
    fontWeight: 'bold'
})

export const ContainerOfSmallCard = styled('div',{
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: "1.5rem",
    overflowY: 'auto',
    overflowX: 'hidden',
    
    '&::-webkit-scrollbar': {
        width: '5px',
        height: '10px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$green300',
        borderRadius: '5px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '$green500',
    }
})