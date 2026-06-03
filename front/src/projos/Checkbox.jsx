import React from 'react'
import '../projo-styles/Checkbox.css'

const Checkbox = () => {
  return (
    <div className='checkbox-page projo'>
        <Box />
        <Box />
        <Box />
    </div>
  )
}

export default Checkbox

const Box = () => {
    return (
        <div className="checkboxes">
            <label>
                <input 
                type="checkbox" /> <span>Checkbox 1</span>
            </label>

            <label>
                <input 
                type="checkbox" /> <span>Checkbox 2</span>
            </label>
            <label>
                <input 
                type="checkbox" /> <span>Checkbox 3</span>
            </label>
        </div>
    )
}

