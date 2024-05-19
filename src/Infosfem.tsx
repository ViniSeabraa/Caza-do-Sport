import escudo from './escudo_sport.jpeg'
import camisafem from "./camisafem.jpg";

const Infos = () =>{
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
    <div className="flex text-red-600 text-center content-center items-center font-semibold text-2xl absolute">
    <img className= "size-80 ml-2"src= {camisafem} alt="Camisa rosa Sport" />
        <div>
            <p>Camisa feminina Umbro Sport recife</p>
            <p>Versão: Especial Ariano Suassuna 2023</p>
            <p>Disponibilade: Em estoque</p>
            <p>Preço: R$259,00</p>
        </div>
            
    </div>
    
        </div>
    
    )
}

export default Infos