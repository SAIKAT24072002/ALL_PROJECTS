
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div
        className='h-screen flex items-end justify-center gap-4 pb-8'
        style={{ backgroundColor: color }}
      >
        <button 
          onClick={() => setColor("black")}
          className='px-4 py-2 font-bold text-white border-2
                    border-white bg-black w-28 rounded-md'>Black
        </button>

        <button
          onClick={() => setColor("orange")}
          className='px-4 py-2 font-bold text-white border-2
                    border-white bg-orange-600 w-28 rounded-md'>Orange
        </button>

        <button
          onClick={() => setColor("red")}
          className='px-4 py-2 font-bold text-white border-2
                  border-white bg-red-600 w-28 rounded-md'>Red
        </button>

        <button
          onClick={() => setColor("green")}
          className='px-4 py-2 font-bold text-white border-2
                     border-white bg-green-600 w-28 rounded-md'>Green
        </button>
        
        <button
          onClick={() => setColor("yellow")}
          className='px-4 py-2 font-bold text-white border-2
                     border-white bg-yellow-600 w-28 rounded-md'>Yellow
        </button>
      </div>
    </>
  )
}

export default App
