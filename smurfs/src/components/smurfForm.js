import React, { useState } from 'react'
import { addSmurf } from '../actions'

const SmurfForm = () => {
    const [smurfs, setSmurf] = useState()
    const handleChanges = e => { 
        const value = e.target.value              
        setSmurf({...smurfs, [e.target.name]: value});
    }

    return (
        <form onSubmit={() => addSmurf(smurfs)}>
            <label>
                Smurf Name:
                <input type='text' name='name' placeholder='Name' onChange={handleChanges} />
            </label>
            <label>
                Age:
                <input type='text' name='age' placeholder='Age' onChange={handleChanges} />
            </label>
            <label>
                Height:
                <input type='text' name='height' placeholder='Height' onChange={handleChanges} />
            </label>
            <button  type='submit' className="submit"> Submit </button>
        </form>
    
        
    )
}

export default SmurfForm