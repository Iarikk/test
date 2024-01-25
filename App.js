import React, { useState } from "react"; 
 
function Component() { 
  const [count, setCount] = useState(0); 
 
  const incrementCount = () => { 
    setCount(count + 1); 
  }; 
 
  const resetCount = () => { 
    setCount(0); 
  }; 
 
  const textStyle = { 
    color: count > 5 ? "red" : "black" 
  }; 
 
  return ( 
    <div> 
      <p style={textStyle} onClick={resetCount}> 
        Число: {count} 
      </p> 
      <div onClick={incrementCount}>Добавить</div> 
    </div> 
  ); 
} 
 
export default Component;