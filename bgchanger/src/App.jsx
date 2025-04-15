import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  const red = () =>{
    setColor("red")
  }
  const black = () =>{
    setColor("black")
  }
  const green = () =>{
    setColor("green")
  }
  const pink= () =>{
    setColor("pink")
  }
  const blue = () =>{
    setColor("blue")
  }
  return (
    <>
     <div className='w-full h-full duration-200'
          style={{backgroundColor:color}}
      >
          <div className='fixed flex flex-wrap justify-around left-70 bottom-15 insert-x-0 px-2 bg-amber-50 rounded-2xl px-3 py-2'>
             <div className='flex flex-wrap justify-center gap-40 bg-amber-50 rounded-2xl'>
                <button onClick={red} className='bg-red-600 rounded-2xl flex flex-wrap text-amber-50 px-3 py-3'>Red</button>
                <button onClick={black} className='bg-black rounded-2xl flex flex-wrap text-amber-50 px-3 py-3'>Black</button>
                <button onClick={green} className='bg-green-600 rounded-2xl flex flex-wrap text-amber-50 px-3 py-3'>Green</button>
                <button onClick={blue} className='bg-blue-600 rounded-2xl flex flex-wrap text-amber-50 px-3 py-3'>Blue</button>
                <button onClick={pink} className='bg-pink-600 rounded-2xl flex flex-wrap text-amber-50 px-3 py-3'>Pink</button>
             </div>
          </div>
     </div>
    </>
  )
}

export default App
