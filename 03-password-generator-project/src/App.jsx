import { useCallback, useState,useEffect ,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str = str + "0123456789";
    }

    if(character){
      str = str + "!@#$%^&*~";
    }

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)

      pass = pass + str.charAt(char)
    }
   
    setPassword(pass)
    

  }, [length,number,character,setPassword])

  const copyPasswordToclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()

  },[length,number,character,passwordGenerator])
  return (

    
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-3 bg-pink-600 justify-between">
        <h1 className=' text-4xl flex justify-center py-12'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
              type = "text"
              value = {password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref = {passwordRef}
            />
            <button 
            onClick = {copyPasswordToclipboard}
            className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 hover:bg-green-600'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 text-xl'>
            <input
                type = "range"
                min = {6}
                max = {50}
                value={length}
                className='cursor-pointer '
                onChange = {(e) => {setLength(e.target.value)}}

              />
                <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1  text-xl'>
            <input
            type = "checkbox"
            defaultChecked = {number}
            id = "numberInput"
            onChange = {() => {
              setNumber((prev) => !prev);
            }}

            />
            <label htmlFor = "numberInput">Number</label>
          </div>

           <div className='flex items-center gap-x-1 text-xl'>
            <input
            type = "checkbox"
            defaultChecked = {character}
            id = "characterInput"
            className='flex justify-center'
            onChange = {() => {
              setCharacter((prev) => !prev)
            }}

            />
            <label  htmlFor="characterInput">Character</label>
          </div>
        </div>
        
      </div>
    
  )
}

export default App
