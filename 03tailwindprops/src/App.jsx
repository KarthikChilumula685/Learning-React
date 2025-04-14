import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from '../components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Test team1="SRH" team2="MI" />
      <Test team1="SRH" team2="RCB" />
    </>
  )
}

export default App
