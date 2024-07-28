import React from 'react'

const Button=({text, onClick, customClass})=>{
  return (
    <div>
        <button className={customClass} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button