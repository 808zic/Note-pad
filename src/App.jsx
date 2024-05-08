import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SaveLoad from './Componets/Saveload'
import Settings from './Componets/Settings'
import Search from './Componets/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <SaveLoad />
    <Settings />
    <Search />

    </>
  )
}

export default App
