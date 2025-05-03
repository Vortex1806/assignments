import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from '../Context'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './stores/atoms/count'

function App() {
  return (
      <div>
        <RecoilRoot>
        <Count/>
        </RecoilRoot>
      </div>
  )
}

function Count(){
  return (
    <div>
      <CountRenderer/>
      <Buttons/>
    </div>
  )
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return (
  <div>
    {count}
  </div>
  );
}

function Buttons(){
  const count = useRecoilValue(countAtom);
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
}

export default App
