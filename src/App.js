import React, { useState } from 'react';
import './App.css';
import Card from "./component/card";

function App() {
  
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('white');

  // const received = (data) => {
  //   setColor(data);
  // }

  

  

  const increament = () => {
    setCounter(prevCounter => prevCounter < 20 ? prevCounter + 1 : 20);
  }

  const decreament = () => {
    setCounter(prevCounter => prevCounter > 0 ? prevCounter - 1 : 0);
  }

  let va = "this is variable value passed in card 2";

  return (
    <div style={{backgroundColor: color}}>
      <h1>setting the counter value {counter}</h1>
      <button onClick={increament}> + </button>
      <button onClick={decreament}> - </button>
      <Card header="this is card 1"/>
      <Card header={va}/>
       {/* <p></p> */}

       <div >
      <button className='btn' onClick={() => setColor("red")}>Red</button>
      <button className='btn' onClick={() => setColor("green")}>Green</button>
      <button className='btn' onClick={() => setColor("blue")}>Blue</button>
      <button className='btn' onClick={() => setColor("white")}>CLear</button>

      </div>
     
    </div>
  );
}

export default App;
