
import './App.css'
import Card from './components/Card'

function App() {
  let myobj={
    usename:'Aditya',
    age:20,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl mb-4'>Tailwind test</h1>
       <Card username="Aditya" btntext="myprofile"/>
       <Card username="Yuvraj"btntext="hisprofile" />
    </>
  )
}

export default App
