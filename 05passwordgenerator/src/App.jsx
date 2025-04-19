import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllow,setNumberAllow] = useState("false")
  const [charAllow , setCharAllow] = useState("false")
  const [password,setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "~`!@#$%^&*()_-+=[]\{}|;',./:"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*(str.length+1))
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length,numberAllow,charAllow,setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md text-orange-500 rounded-lg bg-gray-900 px-8 my-10 py-5 text-4xl'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
          <input type="text" 
            value={password}
            className='outline-none w-full my-2 px-2 py-4 text-center text-3xl bg-gray-500 text-white'
            readOnly
            placeholder='Password'
          />
        </div>  
      </div>
    </>
  )
}

export default App
