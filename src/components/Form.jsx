import React from 'react'
import styled from "styled-components";


function Form() {
  return (
    <div>
        <div className=" h-full w-full lg:w-[700px] absolute flex justify-center items-center py-12 px-2 animate-popOut " >
            {/* <Popup className= {` z-[1000] bg-white h-full w-full p-4 flex justify-center shadow-xl rounded-lg animate-popOut  
           `}> */}

              <iframe
                src="https://lu.ma/embed/event/evt-IyCf9HKQBipd9Gz/simple"
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

            {/* </Popup> */}
          </div>
    </div>
  )
}

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

export default Form