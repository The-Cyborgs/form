5
import './App.css'
import Switch1 from './components/Button'
import Card from './components/Cardtv'

function App() {


  return (
    <>

      <div className='flex flex-col items-center justify-center mt-60 max-sm:mr-14'>
        <h1 className='text-xl text-center'>The cyborgs</h1>
        <Card />
       <Switch1 />
      </div>

    </>
  )
}

export default App
