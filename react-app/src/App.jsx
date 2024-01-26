import Countries from '../resources/countryData.json'
import './App.css'
import { useState } from 'react'

function App() {

  const [name, setName] = useState("")
  const [show,setShow] = useState(true)

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleKeyPress = (event) => {
    if(event.key == "Escape"){
      setShow(!show)
      console.log("Escape")
    }
  }


  return (
    <>
    <div className="App">
    <input type="text" onChange={() => handleChange(event) } onKeyDown={() => handleKeyPress(event)}/>
      <ul>
        {show && Countries.map((el) => {
          let countriesName = el.name.toLowerCase()
          if (countriesName.includes(name.toLowerCase())) {
            return <li key={el.code}>{el.name}</li>
          }
          return null
        })}
      </ul>
    </div>
      

    </>
  )
}

export default App
