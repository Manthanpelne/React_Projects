import { useState } from 'react'
import './App.css'
import { usePasswordGenerator } from './hooks/usePasswordGenerator'

function App() {

  const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
  {title: "Include Uppercase Letters", state:false},
  {title: "Include Lowercase Letters", state: false},
  {title: "Include Numbers", state: false},
  {title: "Include Symbols", state: false}
])

const [copy, setCopy] = useState(false)


const handleCheckboxChange = (i)=>{
console.log(checkboxData[i])
const updateC = [...checkboxData]
updateC[i].state = !updateC[i].state
setCheckboxData(updateC)
}

const handleCopy = () =>{
  navigator.clipboard.writeText(password)
  setCopy(true)

  setTimeout(()=>{
    setCopy(false)
  },1000)
}

const {password, errorMessage, generatePassword} = usePasswordGenerator()


  return (
    <>
    <div className='App'>
      {/* password text and copy */}
      <span className='title' style={{fontSize:30}}>Password Generator with React</span>
      <div className='container'>
      { password && <div className='header'>
        <div className='title'>{password}</div>
        <button className='copyBtn' onClick={handleCopy}>{copy?"Copied":"Copy"}</button>
      </div>}


      {/* Character length */}
      <div className='charLength'>
       <span>
        <label htmlFor="">Character Length</label>
        <label>{length}</label>
       </span> 
       <input type="range" min="4" max="20" value={length} onChange={(e)=>setLength(e.target.value)}/>
      </div>


      {/* checkboxes */}
      <div className='checkboxes'>
        {checkboxData.map((checkbox,index)=>(
          <div key={index}>
            <input type="checkbox" onChange={()=>handleCheckboxChange(index)} checked={checkbox.state}/>
            <label htmlFor="">{checkbox.title}</label>
          </div>
        ))}
      </div>


      {/* {strength} */}



      {/* error handling */}
      {errorMessage && <div className='errorMsg'>{"⚠️"+errorMessage}</div> }


      {/* Generate Button  */}
      <button className='generateBtn' onClick={()=>generatePassword(checkboxData,length)}>Generate Password</button>
      </div>
    </div>
    </>
  )
}

export default App
