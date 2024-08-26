import './App.css'
import { useState } from 'react'
function App() {
  let [counter,setConter]=useState(15)
  // let counter=15
  const addValue=()=>{
    counter+=1
    // console.log("Value Added",counter);
    if(counter<=20){
    setConter(counter)
  }
}
  const decvalue=()=>{
    counter=counter-1;
    if(counter>=0){
    setConter(counter)
  }
}
  return (
  
    <>
     <h1>Learning vlaues incresing and decreasing using counter</h1>
     <h2>counter vlaue : {counter}</h2>
     <button onClick={addValue}>Increase value</button>
     <br />
     <button onClick={decvalue}>Decrease value</button>
    </>
  )
}

export default App
