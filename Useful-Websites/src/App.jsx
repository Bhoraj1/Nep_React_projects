import './App.css'
import Button from './components/Button'

const App = ()=> {
  return (
    <div className='max-w-full' >
      <h1 className='bg-green-400 m-0 w-[100%] p-5 text-white rounded-2xl
      text-lg font-bold'
      >Useful Websites</h1>
      <div>
      <h3 className=''>Which Website you want to Open ?</h3>
      </div>
      <div className='flex justify-center m-5 gap-2 '>
        <Button name = "Google" link = "https://google.com"/>
        <Button name = "Youtube" link = "https://youtube.com"/>
        <Button name = "Github" link = "https://github.com"/>
        <Button name = "facebook" link = "https://facebook.com"/>
      </div>
    </div>
  ) 
}

export default App
