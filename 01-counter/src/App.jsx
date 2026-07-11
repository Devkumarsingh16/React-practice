import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  let [counter,setCounter] = useState(15)

  const addValue   = () =>{
     setCounter(counter + 1)
  }

   const removeValue = () =>{
        setCounter(counter - 1)
   }
  return (
    <>
    <div className = "content">
       <h1>Dev Singh</h1>

       <h2>count : {counter}</h2>
       
       <div className = "btn">
       <button id = "hay"
        onClick = {addValue}
       
       >Add</button>

       <br/>

       <button id = "hay"
        onClick = {removeValue}
       
       >Remove  </button>
       </div>
    </div>
    </>
  )
}

export default App
