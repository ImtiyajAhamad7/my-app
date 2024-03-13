import React, {useState} from 'react'


function Background(props) {
    const [color, setColor] = useState('white');

    
     const red = () => {
      setColor('red');
      return props.red(color);
    
    }
    // const green = () => setColor('green');
    // const blue = () => setColor('blue');
  return (
    <>
       
       <div className="buttuns">
        <button id='red' onClick={red} >Red</button>

        <button id='green' onClick={green =>{
           setColor('green')
           return props.green(color);
        }}>Green</button>


        <button id='blue' onClick={blue =>{ 
           setColor('blue')
           return props.blue(color);
      }}>Blue</button>
       </div>
    </>
  )
}

export default Background
