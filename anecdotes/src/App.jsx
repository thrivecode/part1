import './App.css'


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name }, you are {props.age}. Welcome to the new world of possibilities!!</p>
    </div>
  )
}

function App() {
  const now = new Date() 
  const name = 'Dawuni'
  const age = 38
  return (
    <div className="App">
      <h3>Hello world, it is now {now.toString()}</h3>
      <Hello name="Neenah" age={ 26+10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
