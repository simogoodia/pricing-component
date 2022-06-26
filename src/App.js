import React, { useRef } from 'react';
import ImgFloat from './components/images-float/images-float';
import Monthly from './components/monthly/monthly';
import Annually from './components/annually/annually';
import "./App.css";

function App() {
  const inputEl = useRef(null);
  const showTarget = () => {
    if(inputEl.current.checked) {
      document.querySelectorAll(".price")[1].style.display = "flex";
      document.querySelectorAll(".price")[0].style.display = "none";
    } else {
      document.querySelectorAll(".price")[0].style.display = "flex";
      document.querySelectorAll(".price")[1].style.display = "none";
    }
  }

  return (
    <div className="App">
      <h2 className='heading'>Our Pricing</h2>
      <div className='switch'>
        <span className='btn' data-switch=".annually">Annually</span>
        <input type="checkbox" id="toggle" onChange={showTarget} ref={inputEl} />
        <label htmlFor="toggle">
            <div className="ball"></div>
        </label>
        <span className='btn' data-switch=".monthly">Monthly</span>
      </div>
      <ImgFloat />
      <Monthly />
      <Annually />
    </div>
  );
}

export default App;
