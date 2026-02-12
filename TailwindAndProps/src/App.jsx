import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <Card username="Kyle" age={25} image="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg"/>
        <Card username="Tim" age={30} image="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg"/>
      </div>
    </>
  )
}

export default App
