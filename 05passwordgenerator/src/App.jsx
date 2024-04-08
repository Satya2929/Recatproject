import React, { useState, useCallback,useEffect,useRef } from 'react';



function App() {
  const [length, setLength] = useState(8);
  const [nm, setNm] = useState(false);
  const [ca, setCa] = useState(false);
  const [pd, setPd] = useState('');
  // ref hook 
  const passref=useRef(null);

  const pdn = useCallback(() => { 
    let pa = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (nm) str += '0123456789'
    if (ca) str += '!@#$%^&*_++{{}}[]?/.,;:'

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pa += str.charAt(charIndex);
    }
    setPd(pa);
  }, [length, nm, ca]);
  useEffect(()=>{pdn()},[length, nm, ca , pdn]) 
  const Copypassword=useCallback(()=>{
    window .navigator.clipboard.writeText(pd)
    passref.current?.select(0,3);

  },[pd])


  return (
    <>
      <div className='w-full max-w-md mx-auto align-center shadow-md rounded-lg px-4 my-8 text-orange-800 bg-white-800'>
  <h3 className='text-white text-center my-3'>Password Generator</h3>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
      type="text"
      value={pd}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passref}
    />
    <button onClick={Copypassword} className='outline-none bg-blue-700 text-white py-0.5 px-3'>Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className='flex items-center gap-x-1'>
      <input
        type="range"
        min={5}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) => { setLength(e.target.value) }}
      />
      <label htmlFor="">Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
      <input
        type="checkbox"
        defaultChecked={nm}
        id="numberInput"
        onChange={() => { setNm((prev) => !prev) }}
      />
      <label htmlFor="numberInput">Number</label>
      <input
        type="checkbox"
        defaultChecked={ca}
        id="charInput"
        onChange={() => { setCa((prev) => !prev) }}
      />
      <label htmlFor="charInput">Char</label>
    </div>
  </div>
</div>

      
    </>
  );
}

export default App;
