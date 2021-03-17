import React, { useEffect, useState } from 'react';
import '../css/Footer.css';
import Console from './Console';

export default function Footer(props) {
 
    const [isShowedConsole, setisShowedConsole] = useState(false);

    function handleShowConsole() {
        setisShowedConsole(!isShowedConsole);
    }

    return (
        <div className="Footer">
            <span>
                <div className="item errorMessage" onClick={handleShowConsole}>
                    <i class="fas fa-times-circle error"></i>{props.errors.error.length}
                    <i class="fas fa-exclamation-triangle warning"></i>{props.errors.warning.length}
                </div>

            </span>
            
            <span>
                <div className="item">Line {props.cursorPosition.totalLine} col {props.cursorPosition.col}</div>
                <div className="item">{props.fileType}</div>
                <div className="item" onClick={handleShowConsole}>Console</div>
            </span>
           <div  className="ConsoleBox">
               {isShowedConsole && <Console setShowed={setisShowedConsole} seterrors={props.seterrors} errors={props.errors}/>}
            </div>
         </div>
    )
}
