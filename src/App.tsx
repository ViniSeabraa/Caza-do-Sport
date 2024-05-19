import './App.css'
import escudo from './escudo_sport.jpeg'
import Navbar from './navbar'


function App() {

  return (
    <div className='h-screen bg-zinc-900' >
      <p className=' 
      text-red-600 
      font-sans hover: font-serif
      text-center
      h-16' >Cazá do Sport</p>
      <div className='bg-red-600 h-0.5'></div>

    <p className='size-14 pt-0 -translate-y-16'>
        <img src= {escudo} alt="Escudo do Sport Club do Recife" />
    </p>
    <div className='flex w-30 ml-24 font-semibold'>
      <Navbar/>
    </div>
    </div>
  )
}

export default App
