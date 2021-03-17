import React, { useState } from 'react';
import '../css/Console.css';

export default function Console(props) {
    
    const [filterType, setfilterType] = useState(null); /**null = all(messages) false = Errors true= Warnings */
    const [consoleValue, setconsoleValue] = useState('');
    
    const [searchPhrase, setsearchPhrase] = useState('');

   

    return (
        <div className="Console">
            <div className="ConsoleOptions">
                <span>
                    <button onClick={()=>props.setShowed(false)}><i class="fas fa-arrow-left"></i></button>
                    <button className="clear" onClick={()=>props.seterrors({message: [], error:[], warning:[]})}><i class="fas fa-eraser"></i></button>
                </span>
                <span>
                    <button className="search">
                        <i class="fas fa-search"></i>
                        <textarea></textarea>
                    </button>
                    <button className="message" onClick={()=>setfilterType(null)}>Messages</button>
                    <button className="error" onClick={()=>setfilterType(false)}>Errors</button>
                    <button className="warn" onClick={()=>setfilterType(true)}>Warnings</button>
                </span>
            </div>
            <div className="ConsoleContent">
                {
                     (filterType == null) &&
                    props.errors.message.map((e, index) => {
                        return(
                            <div className="ConsoleValue mes">
                               {e}
                             </div>
                        )
                    })
                }
                {
                    (filterType == false || filterType == null) &&
                    props.errors.error.map((e, index) => {
                        return(
                            <div className="ConsoleValue err">
                               {e}
                             </div>
                        )
                    })
                }
                {
                     (filterType == true || filterType == null) &&
                    props.errors.warning.map((e, index) => {
                        return(
                            <div className="ConsoleValue war">
                               {e}
                             </div>
                        )
                    })
                }
                
                <div className="ConsoleValue">
                    <textarea placeholder=">" value={consoleValue} onChange={(e)=>setconsoleValue(e.target.value)}></textarea>
                </div>
            </div>
        </div>
    )
}
