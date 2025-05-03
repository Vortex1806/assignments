// import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// // import Dashboard from "./components/Dashboard";
// // import Landing from "./components/Landing";
// import React, { memo, Suspense } from "react";
// const Dashboard = React.lazy(()=> import('./components/Dashboard'));
// const Landing = React.lazy(()=> import('./components/Landing'));

import { useContext, useState } from "react";
import { CountContext } from "../../recoil-tutorial/Context";

// function App(){
  
//   return(
//     <div>
//       <BrowserRouter>
//         <AppBar/>
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
//           <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// const AppBar = memo(()=>{
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div >
//       <button onClick={()=> navigate('/')}>Landing</button>
//       <button onClick={()=>navigate('/dashboard')}>Dashboard</button>
//       </div>
//     </div>
//   )
// })

// export default App;

//prop drilling unwanted passing the data to middle functions
// function App(){
//   const [count,setCount] = useState(0);
//   return(
//     <div>
//       <Count count={count} setCount={setCount}/>
//     </div>
//   )
// }

// function Count({count, setCount}){
//   return(
//     <div style={{color:"red"}}>
//       {count}
//       <Buttons setCount={setCount}/>
//     </div>
//   )

// }
// function Buttons({setCount}){
//   return(
//     <div>
//       <button
//         onClick={()=>setCount(prev=>prev+1)}
//       >Increase</button>
//       <button
//         onClick={()=>setCount(prev=>prev-1)}
//       >Decrease</button>
//     </div>
//   )
// }


function App(){
  const [count,setCount] = useState(0);
  return(
    <CountContext.Provider value={{count,setCount}}>
    <div>
      <Count />
    </div>
    </CountContext.Provider>
  )
}

function Count(){
  return(
      <div >
        <CountRenderer />
        <Buttons />
      </div>
  )
}

function CountRenderer(){
  const {count }= useContext(CountContext);
  return(
    <div style={{color:"red"}}>
      {count}
    </div>
  )
}

function Buttons(){
  const {count, setCount }= useContext(CountContext);
  return(
    <div>
      <button
        onClick={()=>setCount(count+1)}
      >Increase</button>
      <button
        onClick={()=>setCount(count-1)}
      >Decrease</button>
    </div>
  )
}

export default App;