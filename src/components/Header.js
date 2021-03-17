import React, { useEffect, useState } from 'react'
import '../css/Header.css';
import HeaderConfig from '../Utils/HeaderConfig';



export default function Header({window, setwindow}) {
    const config = HeaderConfig;
   
    
    
    useEffect(() => {
        console.log("info z headera: "+window);
    }, [window]);

    return (
        <div className="header">
            <div className="logo"><i className="far fa-folder-open"></i></div>
            {
                config.map((e, index) => {
                    return(
                    <div className="item" key={index}>
                        <button 
                        className="parentItem" >
                        {e.parentItem}
                        </button>

                        <ul key={index}>
                            {
                                e.childItems.map((f, index) =>{
                                    return(
                                        <li key={index} onClick={f.handleAction, ()=>{setwindow(f.handleWindow)}}><i className="far fa-folder-open"></i>{f.childItem}</li>
                                    )
                                })          
                            }
                        </ul>
                    </div>
                    )
                })
            }
            {/* <div className="projectTitle"><p>Project-name-app</p></div>            */}
        </div>
    )
}
