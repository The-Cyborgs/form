import { useState, useEffect } from 'react';
import './App.css';
import Switch1 from './components/Button';
import Card from './components/Cardtv';
import Loader from './components/Loader';

function App() {
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000); 

  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ?  <div className=' flex flex-col items-center justify-center  mt-80'><Loader /> </div>:
        <div className='flex flex-col items-center justify-center mt-40 max-sm:mr-14'>
          <h1 className='text-5xl text-center font-bold text-blue-500'>The Cyborgs</h1>
          <Card />
          <Switch1 />
        </div>
      }
    </>
  );
}

export default App;
