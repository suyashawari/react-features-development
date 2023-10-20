import { useState } from 'react'


import './App.css'

function App() {
  const [backcolor, setBackcolor] = useState("black")
  var backcolorchanging=()=>{

  }
  return (
    <>
    <><div className='w-full h-screen  duration-200 ' style={{backgroundColor:backcolor}}>
     
     <div className=' w-screen fixed flex flex-wrap justify-center bottom-12  px-4  '>
    <div className=' p-4 rounded-xl flex flex-wrap justify-center gap-3 bg-white'> 
    <button className='px-4 py-2 bg-red-600 rounded-lg' onClick={()=>{
    setBackcolor("red")
    }}>red</button>
     <button className='px-4 py-2 bg-green-600 rounded-lg ' onClick={()=>{
     setBackcolor("green")
    }}>green</button>
     <button className='px-4 py-2 bg-blue-600 rounded-lg ' onClick={()=>{
     setBackcolor("blue")
    }}>blue</button>
     <button className='px-4 py-2 bg-purple-600 rounded-lg ' onClick={()=>{
      setBackcolor("purple")
    }}>purple</button>
     <button className='px-4 py-2 bg-cyan-600 rounded-lg ' onClick={()=>{
      setBackcolor("cyan")
    }}>cyan</button>
     <button className='px-4 py-2 bg-gray-600 rounded-lg ' onClick={()=>{
     setBackcolor("gray")
    }}>gray</button>
     </div>
      </div>
      
      </div>
      
      </>
    </>
  )
}

export default App
