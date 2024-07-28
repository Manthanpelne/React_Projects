import React from 'react'

export default function Checkbox({title,state,onChange}) {
  return (
    <div>
           <div>
            <input type="checkbox" onChange={onChange} checked={state}/>
            <label htmlFor="">{title}</label>
          </div>
    </div>
  )
}
