import React from 'react';
function Button(){
    function myFunction()
    {   
        window.location="deopdown.html"
    }
    return(
    <div className="button">
    <div className="toggle-btn" onclick={myFunction}>
    <div className="inner-circle"></div>
    </div>
    </div>
    );
    }
export default Button();