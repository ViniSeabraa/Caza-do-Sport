import escudo from './escudo_sport.jpeg'

const CompraFinalizada = () =>{
    return(
        
        <div className='h-screen bg-zinc-900'>
      <p className=' 
      text-red-600 
      font-sans hover: font-serif
      text-center
      h-16' >Cazá do Sport</p>
      <div className='bg-red-600 h-0.5'></div>

    <p className='size-14 pt-0 -translate-y-16'>
        <img src= {escudo} alt="Escudo do Sport Club do Recife" />
    </p>

    <div className='text-red-600 items-center content-center text-center text-4xl font-semibold'>
        <p>Compra finalizada com sucesso!</p>
        <p>Obrigado por comprar na Cazá do Sport, volte sempre!</p>
    </div>
    
        </div>
    
    )
}

export default CompraFinalizada