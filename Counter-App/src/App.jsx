import {useState} from "react";

function App() {
  const [number, setNumber] = useState(0)

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl'>{number}</h1>
        <button onClick={() => setNumber(number+1)} className='m-2 p-2 bg-blue-500 text-white rounded'
        >Add</button>
        <button className='m-2 p-2 bg-red-500 text-white rounded'
        onClick={() => setNumber(number-1)}>Less</button>
        <button className='m-2 p-2 bg-gray-500 text-white rounded'
        onClick={() =>setNumber(0)}>Reset</button>
      </div>
    </div>
  )
}


export default App
