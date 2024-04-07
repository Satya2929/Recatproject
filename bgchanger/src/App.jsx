import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
//import viteLogo from './vite.svg'; // Assuming vite.svg is in the same directory
import './App.css';

function App() {
  let [color, setColor] = useState("olive");

  return (
    <>
    <div className="w-full h-screen    duration-200 relative" style={{ backgroundColor: color, paddingBottom: '60px'  }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
        </div>
      </div>
      <div className="w-full h-full" style={{ backgroundColor: color }}></div>  
    </div>
    </>
  );
}

export default App;
