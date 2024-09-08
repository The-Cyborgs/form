// import React from "react";
import styled from "styled-components";
import { useState } from "react";


const Switch1 = ({setButton}) => {
  const [showPopup, setShowPopup] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false)

  const btn = () => {
    setShowPopup(!showPopup); 
  };


  const openPopup = () => {

    setButton(true);

    setBtnDisable(true);

    setTimeout(() => {
      setIsOpen(true);
      setBtnDisable(false);
    }, 4200);
    setIsClosing(false); 
  };
  
  const closePopup = () => {
    setButton(false)
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Matching the duration of the closing animation (0.5s)
  };



  return (
    <>
     

        <StyledWrapper>
          <div className="toggle-container" >
            <input className="toggle-input" type="checkbox" onClick={isOpen ? closePopup : openPopup} disabled={btnDisable}/>
            <div className="toggle-handle-wrapper">
              <div className="toggle-handle">
                <div className="toggle-handle-knob" />
                <div className="toggle-handle-bar-wrapper">
                  <div className="toggle-handle-bar" />
                </div>
              </div>
            </div>
            <div className="toggle-base">
              <div className="toggle-base-inside" />
            </div>
          </div>
        </StyledWrapper>
        {isOpen  && (
          <div className=" h-full w-full lg:w-[700px] absolute flex justify-center items-start pb-24 pt-4 px-2 " >
            <Popup className= {` z-[1000] bg-white h-full w-full p-4 flex justify-center shadow-xl rounded-lg animate-popOut  
            ${isClosing ? "animate-popOutReverse" : "animate-popOut"} `}>

              <iframe
                src="https://lu.ma/embed/event/evt-IyCf9HKQBipd9Gz/simple"
                // width="300"
                // height="600"
                className="h-full w-full"
                frameborder="0"
                style={{
                  border: "1px solid #bfcbda88",
                  borderRadius: "4px",
                }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>

            </Popup>
          </div>
        )}
      
    </>
  );
};

const StyledWrapper = styled.div`
  .toggle-container {
  --knob-size: 1.75em;
  display: flex;
  justify-content: center;
  position: relative;
}

.toggle-input {
  position: absolute;
  z-index: 2;
  bottom: 132.5%;
  border-radius: 50%;
  transform: rotate(-25deg);
  transform-origin: 50% 4.75em;
  width: var(--knob-size);
  height: var(--knob-size);
  opacity: 0;
  /* fix em sizing */
  font: inherit;
  transition: transform 0.24s cubic-bezier(0.65, 1.35, 0.5, 1);
  cursor: pointer;
}

.toggle-input:checked {
  transform: rotate(25deg);
}

.toggle-handle-wrapper {
  position: absolute;
  z-index: 1;
  bottom: -135%;
  -webkit-mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);
  mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);
  width: 200%;
  overflow: hidden;
}

.toggle-handle {
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-25deg);
  transform-origin: bottom center;
  transition: transform 0.24s cubic-bezier(0.65, 1.35, 0.5, 1);
}

.toggle-input:checked + .toggle-handle-wrapper > .toggle-handle {
  transform: rotate(25deg);
}

.toggle-handle-knob {
  position: relative;
  z-index: 1;
  border-radius: 50%;
  width: var(--knob-size);
  height: var(--knob-size);
  background-image: radial-gradient(
    farthest-corner at 70% 30%,
    #fedee2 4%,
    #d63534 12% 24%,
    #a81a1a 50% 65%,
    #d63534 75%
  );
  transition: transform 0.24s cubic-bezier(0.65, 1.35, 0.5, 1);
}

.toggle-input:checked + .toggle-handle-wrapper .toggle-handle-knob {
  transform: rotate(-90deg);
  background-image: radial-gradient(
    farthest-corner at 70% 30%,
    #fedee2 4%,
    #95e913 12% 24%,
    #5ade26 50% 65%,
    #3acd00 75%
  );
}

/* toggle handle knob hover inner shadow */
.toggle-handle-knob::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 8px 2px rgb(255 255 255 / 0.4);
  opacity: 0;
  transition: opacity 0.2s;
}

@media (hover: hover) {
  .toggle-input:hover + .toggle-handle-wrapper .toggle-handle-knob::after,
  .toggle-input:focus-visible
    + .toggle-handle-wrapper
    .toggle-handle-knob::after {
    opacity: 1;
  }
}

.toggle-handle-bar-wrapper {
  position: relative;
  width: 0.5em;
  height: 3em;
}

.toggle-handle-bar {
  position: absolute;
  top: calc(var(--knob-size) / 2 * -1);
  left: 0;
  width: 100%;
  height: calc(100% + var(--knob-size) / 2);
  background-image: linear-gradient(
    to right,
    #777475,
    #a4a4a4,
    #fff 45% 55%,
    #a4a4a4,
    #777475
  );
  background-position-x: 0.06125em;
  transition: background-position-x 0.24s cubic-bezier(0.65, 1.35, 0.5, 1);
  box-shadow: inset 0 1em 0.25em rgb(0 0 0 / 0.4);
}

.toggle-input:checked + .toggle-handle-wrapper .toggle-handle-bar {
  background-position-x: -0.06125em;
}

.toggle-base {
  position: relative;
  border-radius: 3.125em;
  padding: 0.25em;
  width: 3.5em;
  height: 1.125em;
  background-color: #fff;
  background-image: linear-gradient(to bottom, #fff, #d7d7d7);
  box-shadow:
    0 -0.25em 0.5em #fff,
    0 0.25em 0.5em #d7d7d7;
}

.toggle-base-inside {
  position: relative;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #a6a6a6, #7d7d7d);
  box-shadow:
    inset 0 0.0625em rgb(255 255 255 / 0.2),
    inset 0 -0.03125em rgb(255 255 255 / 1),
    inset 0 -0.0625em 0.25em rgb(0 0 0 / 0.1);
}

/* toggle base inside active */
.toggle-base-inside::after {
  content: "";
  position: absolute;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #5ab054, #438c3c);
  box-shadow: inherit;
  opacity: 0;
  transition: opacity 0.24s cubic-bezier(0.65, 1.35, 0.5, 1);
}

 /* Popup overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
// Styled component for the Popup
const Popup = styled.div`
  // position: absolute;
  // top: 40%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // width: 340px;
  // padding: 20px;
  // background: white;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  // z-index: 1000;
  
  `


  ;

export default Switch1;





