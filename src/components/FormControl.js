import React,{useState} from 'react';

const FormControl=()=>{
    const[label,setLabel]=useState('');
    return (
      <>
        <form className="form">
          <div className="form-control">
            <input
              type="text"
              id="label"
              name="label"
              placeholder="Enter Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>
          <button type='submit' onClick={()=>console.log('submitted')}>Submit</button>
        </form>
      </>
    );
}

export default FormControl;