import React, { useEffect, useMemo, useState } from "react"
import axios from "axios";

let cnt = 0;

function App() {
  // const [counter,setCounter] = useState(0);
  // const [inpVal,setInputVal] = useState(1);
  // const [count,setCount] = useState(0);

  // let count = useMemo(()=>{
  //   let finalCount = 0;
  //   for(let i = 1; i <= inpVal; i++){
  //     finalCount+=i;
  //   }
  //   return finalCount;
  // },[inpVal])
  // useEffect(()=>{
  //   let finalCount = 0;
  //   for(let i = 1; i <= inpVal; i++){
  //     finalCount+=i;
  //   }
  //   setCount(finalCount);
  // },[inpVal])

  const [counter,setCounter] = useState(0);
          
  return (
    <div>
        {/* <input onInput={(e)=>{
          setInputVal(Number(e.target.value))
        }} type="number" />
        <h5>Sum is {count}</h5> */}
        <button onClick={()=>{
          setCounter(counter+1)
        }}>Counter ({counter})</button>
      </div>
  )
}

export default App

