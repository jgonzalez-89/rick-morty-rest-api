import { useState } from 'react'
import RickAndMorty from './components/characters'
import Navbar from './components/navbar'


function App() {
  const [count, setCount] = useState(0)


return (
  <>
    <Navbar />
    <div className='bg-slate-300'>
    <RickAndMorty />
    </div>
  </>
  )
}

export default App
