import { styled } from ".."

export const CardContainer = styled("div", {
    width: '384px',
    minHeight: '94px',
    display: 'flex',
    gap: '0.8rem',
    color: '$gray-300',
    fontSize: '$md',

    div:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',

    },

    h4:{
        fontWeight: 400,    
    }
})

export const CardPrice = styled("span", {
    fontWeight: "bold",    
})

export const RemoveSpn = styled("span", {
    color: "$green500",
    fontWeight: "bold",   
    marginTop: "0.5rem",
    cursor: 'pointer',

    "&:hover":{
        color: "$green300",
        transition: "color 0.2s"
    }
})