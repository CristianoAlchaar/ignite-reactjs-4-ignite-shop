import Link from "next/link"

export default function Canceled(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: '1rem',
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "auto",
        }}>
           <h1>Não foi possível realizar a comprar.</h1>     
           <p style={{
                color: 'gray',
                fontSize: '1.5rem',
           }}>Tente Novamente</p>

           <Link href="/" style={{
                display: 'block',
                marginTop: '5rem',
                fontSize: '1.8rem',
                color: 'blueviolet',
                textDecoration: 'none',
                fontWeight: 'bold',
           }}>
                Voltar ao catálogo
            </Link>
        </div> 
    ) 
}