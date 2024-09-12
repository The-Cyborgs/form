import React, { useEffect, useState } from 'react';

const Typewriter = ({ hideText }) => {

  const text = 'Coonnecting you with the Cyborg World...'
  const [displayedText, setDisplayedText] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const typingSpeed = 100;
  const cursorBlinkSpeed = 500;

  useEffect(() => {
    let index = 0;
    let typingTimeout;
    let blinkInterval;

    console.log('Displayed text', displayedText);

    const type = () => {
      
      if (index < text.length-1 ) {
        console.log(text[index]); 
        setDisplayedText((prev) => prev + text[index]);
        index++;
        typingTimeout = setTimeout(type, typingSpeed);
      }
    };

    type();

    blinkInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => {
      clearTimeout(typingTimeout);
      clearInterval(blinkInterval);
    };
  }, [text]);

  return (
    <div className="p-2 pt-6 w-full relative overflow-hidden">
      <p className={`text-sm whitespace-pre-wrap text-[#08ff08] 
      ${hideText ? 'opacity-0' : 'opacity-100'}
      `}
      >
        {displayedText}
      </p>
      <div
        className={`absolute bottom-2 right-2 h-6 w-1 ${isCursorVisible ? 'block' : 'hidden'}`}
        style={{
          animation: 'blink 1s step-end infinite',
        }}
      ></div>
      <style>
        {`
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Typewriter;
