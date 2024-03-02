import {React, useState, useEffect} from 'react'
import './styles.css';

const RandomColor = () => {
  const [colorMode, setColorMode] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomInt(hex.length)];
    }
    setColor(hexColor);
  }

  const handleRandomRgbColor = () => {
    const r = randomInt(255);
    const g = randomInt(255);
    const b = randomInt(255);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() =>{
    colorMode === "hex" ? handleRandomHexColor() : handleRandomRgbColor();
  }, [colorMode]);

  return (
    <div className="container"
    style={{
      width: '100vw',
      height: '100vh',
      background: color
    }}>
      <div>
        <button className={colorMode==="hex" && "selected"} onClick={()=>setColorMode("hex")}>HEX</button>
        <button className={colorMode==="rgb" && "selected"} onClick={()=>setColorMode("rgb")}>RGB</button>
      </div>
      <button onClick={colorMode === "hex" ? handleRandomHexColor : handleRandomRgbColor}>Generate</button>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        fontSize: '20px',
      }}>
        <h4>{colorMode}</h4>
        <h3>{color}</h3>
      </div>
    </div>
  )
}

export default RandomColor