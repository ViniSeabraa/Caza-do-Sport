import { Link } from "react-router-dom";
import camisarosa from "./camisarosa.jpg";
import camisafem from "./camisafem.jpg"
import camisaprinc from "./camisaprinc.jpg"
import carrinho from "./carrinho.png"
import { useState } from "react";
import remover from "./remover.png"

const Navbar = () => {
    var [qtdRosa, setQtdRosa] = useState(0)
    var [qtdFem, setQtdFem] = useState(0)
    var [qtdPrinc, setQtdPrinc] = useState(0)

    if (qtdRosa< 0){
        qtdRosa = 0
    }

    if (qtdFem< 0){
        qtdFem = 0
    }

    if (qtdPrinc< 0){
        qtdPrinc = 0
    }

    return (
            <nav className='flex text-sm space-x-8 text-red-600 w-max'> 
      <div>
        <Link to="Infosrosa"><img className= "size-40"src= {camisarosa} alt="Camisa rosa Sport" />
        Camisa outubro rosa 2023 R$299,00</Link>
        
        <button onClick={() => setQtdRosa(qtdRosa + 1)}><img className="size-6 ml-2"src={carrinho} alt="Add ao carrinho"/></button>
        <button onClick={() => setQtdRosa(qtdRosa - 1)}><img className="size-6 ml-2"src={remover} alt="Remover do carrinho"/></button>

      </div>
      <div>
        <Link to="Infosfem">
        <img className= "size-40"src= {camisafem} alt="Camisa feminina Sport" />
        Camisa feminina 2023 R$259,00
        </Link>
        <button onClick={() => setQtdFem(qtdFem + 1)}><img className="size-6 ml-2"src={carrinho} alt="Add ao carrinho"/></button>
        <button onClick={() => setQtdFem(qtdFem - 1)}><img className="size-6 ml-2"src={remover} alt="Remover do carrinho"/></button>

        
      </div>
      <div>
        <Link to="Infosprinc">
            <img className= "size-40"src= {camisaprinc} alt="Camisa principal Sport" />
            Camisa principal 2023 R$349,00
        </Link>
        <button onClick={() => setQtdPrinc(qtdPrinc + 1)}><img className="size-6 ml-2"src={carrinho} alt="Add ao carrinho"/></button>
        <button onClick={() => setQtdPrinc(qtdPrinc - 1)}><img className="size-6 ml-2"src={remover} alt="Remover do carrinho"/></button>

      </div>
      <div className='bg-slate-100 w-52 text-red-600 border-2 border-red-600 -translate-y-28 translate-x-12'>
        <p>Itens no carrinho:</p>
        <p className="flex"><img className= "size-10"src= {camisarosa} alt="Camisa rosa Sport"/>Qtd:{qtdRosa}</p>
        <p className="flex"><img className= "size-10"src= {camisafem} alt="Camisa feminina Sport"/> Qtd:{qtdFem}</p>
        <p className="flex"><img className= "size-10"src= {camisaprinc} alt="Camisa principal Sport"/> Qtd:{qtdPrinc}</p>
        <p>Valor total: R$ {qtdRosa*299 + qtdFem*259 + qtdPrinc*349}</p>
        <Link to ="comprafinalizada" className="border border-red-600 font-bold">Finalizar compra</Link>
      </div>
    
    
        </nav>
    )
}

export default Navbar