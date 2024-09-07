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
    }, 5000); 

  
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ?  <div className=' flex flex-col items-center justify-center  h-screen'><Loader /> </div>:
        <div className='flex flex-col items-center justify-center h-screen'>
          <Card />
          <Switch1 />
          {/* <Social /> */}
        </div>
      }
    </>
  );
}

export default App;
