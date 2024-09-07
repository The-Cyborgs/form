import { useState, useEffect } from 'react';
import './App.css';
import Switch1 from './components/Button';
import Card from './components/Cardtv';
import Loader from './components/Loader';
import Social from './components/Social';

function App() {
  const [loader, setLoader] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000); 

  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ?  <div className=' flex flex-col items-center justify-center h-screen'>
        <Loader />
         </div>:
        <div className='flex flex-col items-center justify-between h-screen border pb-8'>
          <div className='h-full flex justify-center items-center'>

          <Card />
          </div>


          <Switch1 />
        </div>
      }
      {/* <Social /> */}
    </>
  );
}

export default App;
