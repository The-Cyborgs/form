import { useState, useEffect } from 'react';
import './App.css';
import Switch1 from './components/Button';
import Card from './components/Cardtv';
import Form from './components/Form';
import Loader from './components/Loader';
import Stars from './components/Stars';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 

function Home() {
  const [loader, setLoader] = useState(true);
  const [button, setButton] = useState(false);
  const [hideTvDiv, setHideTvDiv] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [blackout, setBlackout] = useState(false);

  const navigate = useNavigate(); // use useNavigate hook for navigation

  useEffect(() => {
    if (button) {
      const blackoutTimeout = setTimeout(() => {
        setBlackout(true);
        setHideText(true);
      }, 6500);

      const hideDiv = setTimeout(() => {
        setHideTvDiv(true);
        navigate('/register'); 
      }, 7200);

      return () => {
        clearTimeout(blackoutTimeout);
        clearTimeout(hideDiv);
      };
    }
  }, [button, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <div className='flex flex-col items-center justify-center h-screen'>
          <Loader />
        </div>
      ) : (
        <>
          {hideTvDiv ? (
            <div className='h-screen bg-black text-white'>
              {/* <Form /> */}
              <Stars />
            </div>
          ) : (
            <div
              className={`flex flex-col items-center justify-between h-screen pb-8 ${
                blackout ? 'animate-blackout' : ''
              }`}
            >
              <div className='h-full flex justify-center items-center'>
                <Card button={button} hideText={hideText} />
              </div>

              <Switch1 setButton={(value) => setButton(value)} />
            </div>
          )}
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <div className='h-screen bg-black text-white'>
              <Form />
              <Stars />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
