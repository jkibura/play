import React from 'react'
import '../projo-styles/Checkbox.css'

const Checkbox = () => {
  return (
    <div className='checkbox-page'>
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
    </div>
  )
}

export default Checkbox