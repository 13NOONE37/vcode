import React, { useContext, useEffect, useState } from 'react';
import '../css/PopWindows.css';


export default function PopBox (props) {

   function handleClick(){
       console.log("Arrow clicked, setting null to window state");
       props.setwindow(null);
   }


    return (
      
        <div className="popBox">
            <div className="popBoxContent">
                <button onClick={handleClick}>
                 <i class="fas fa-arrow-left"></i>
                </button>
                {props.window}
            </div>
        </div>
     
        
    );
 
    
}
