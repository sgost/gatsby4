import React from 'react';
import './switch.css';
const Switch = ({rounded = false}) => {
    const [status,setStatus]=React.useState(true)
    return(
    <div className="switch1">
       <div className="switch3">
    {status?<p>Litemode</p>:<p>Darkmode</p>}
    </div>
    <div className="switch2">
    <label className="switch">
    <input type="checkbox" onClick={()=>setStatus(!status)}/>
    <span className="slider rounded"/>
    </label>
    </div>
    </div>
    
    );
};

export default Switch;