import { useState } from 'react'
import './App.css'
import { usePasswordGenerator } from './hooks/usePasswordGenerator'
import PasswordStrengthIndicator from './components/strengthCheck'
import Button from './components/Button'
import Checkbox from './components/Checkbox'

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
        <div className='passCon'>
      { password && <div className='header'>
        <div className='title'>{password}</div>

        <Button onClick={handleCopy} text={copy?"Copied":"Copy"} customClass="copyBtn" />
      </div>}
        </div>


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
        <Checkbox
        key={index}
        title={checkbox.title}
        onChange={()=>handleCheckboxChange(index)}
           state={checkbox.state}
        />
        ))}
      </div>


      {/* {strength} */}
      <PasswordStrengthIndicator password={password}/>


      {/* error handling */}
      {errorMessage && <div className='errorMsg'>{"⚠️"+errorMessage}</div> }


      {/* Generate Button  */}
     <Button customClass="generateBtn"text="Generate Password" onClick={()=>generatePassword(checkboxData,length)}/>
      </div>
    </div>
    </>
  )
}

export default App
