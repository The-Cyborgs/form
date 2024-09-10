import React, { useEffect, useRef } from 'react';

const Stars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myCanvas = canvasRef.current;
    const ctx = myCanvas.getContext('2d');
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    const resizeCanvas = () => {
      myCanvas.width = window.innerWidth;
      myCanvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.myX = Math.random() * window.innerWidth;
        this.myY = Math.random() * window.innerHeight;
        this.myColor = 0;
      }

      updatePos() {
        let speedMult = 0.02;
        if (warpSpeed) speedMult = 0.028;
        this.myX += xMod + (this.myX - window.innerWidth / 2) * speedMult;
        this.myY += yMod + (this.myY - window.innerHeight / 2) * speedMult;
        this.updateColor();

        if (this.myX > window.innerWidth || this.myX < 0) {
          this.myX = Math.random() * window.innerWidth;
          this.myColor = 0;
        }
        if (this.myY > window.innerHeight || this.myY < 0) {
          this.myY = Math.random() * window.innerHeight;
          this.myColor = 0;
        }
      }

      updateColor() {
        if (this.myColor < 255) {
          this.myColor += 5;
        } else {
          this.myColor = 255;
        }
      }
    }

    let xMod = 0,
      yMod = 0,
      warpSpeed = 0;
    const starField = [];
    let starCounter = 0;

    while (starCounter < 200) {
      starField.push(new Star());
      starCounter++;
    }

    // Input events
    const handleKeyDown = (event) => {
      const code = event.keyCode || event.charCode;
      switch (code) {
        case 32:
          warpSpeed = 1;
          break;
        case 37:
          xMod < 6 ? (xMod += 0.3) : (xMod = 6);
          break;
        case 38:
          yMod < 6 ? (yMod += 0.3) : (yMod = 6);
          break;
        case 39:
          xMod > -6 ? (xMod -= 0.3) : (xMod = -6);
          break;
        case 40:
          yMod > -6 ? (yMod -= 0.3) : (yMod = -6);
          break;
        default:
          break;
      }
      event.preventDefault();
    };

    const handleKeyUp = (event) => {
      const code = event.keyCode || event.charCode;
      switch (code) {
        case 32:
          warpSpeed = 0;
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          xMod = 0;
          yMod = 0;
          break;
        default:
          break;
      }
      event.preventDefault();
    };

    const handleMouseDown = () => {
      warpSpeed = 1;
    };

    const handleMouseUp = () => {
      warpSpeed = 0;
    };

    const handleTouchStart = (event) => {
      event.preventDefault();
      warpSpeed = 1;
    };

    const handleTouchEnd = () => {
      warpSpeed = 0;
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchend', handleTouchEnd, false);

    function draw() {
      if (warpSpeed === 0) {
        ctx.fillStyle = 'rgba(0,0,0,0.2)';
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }
      for (const star of starField) {
        ctx.fillStyle = `rgb(${star.myColor},${star.myColor},${star.myColor})`;
        ctx.fillRect(star.myX, star.myY, star.myColor / 128, star.myColor / 128);
        star.updatePos();
      }
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative h-screen">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-black z-0"></canvas>
    </div>
  );
};

export default Stars;
