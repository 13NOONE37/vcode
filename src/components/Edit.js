import React, { useRef, useState } from 'react';
import '../css/Edit.css';

export default function Edit(props) {
    
    const textarea = useRef(null);

    const [textValue, settextValue] = useState([
        {  
                line: [
                    'hello',
                    ' ',
                    '1'
                ],
        },
        {  
            line: [
                'hello',
                    ' ',
                    '1',
                    ' ',
                    'worldworldworldworld',
                    ' ',
                    'testowy',
                    ' ',
                    ' ',
                    '1',
                    ' ',
                    'world',
                    ' ',
                    'testowy',
                    ' ',
                    ' ',
                    '1',
                    ' ',
                    'world',
                    ' ',
                    'testowy',
                    ' ',
                    
            ],
        },
        {  
            line: [
                'hello',
                ' ',
                '1'
            ],
        },
        { 
            line: [
                'hello',
                ' ',
                '1'
            ],
        },
        {  
            line: [
                'hello',
                ' ',
                '1'
            ],
        },
    
    ]);
    

    /**TODO wyciąć do pliku ../Utils/EditActions/Shortcuts.js */
    const handleDuplicateLine = (e) => {
        e.preventDefault();
        if(e.ctrlKey && e.keyCode==68){
            const temp = [...textValue].slice(0, e.target.tabIndex).concat([...textValue].slice(e.target.tabIndex-1, e.target.tabIndex)).concat([...textValue].slice(e.target.tabIndex, textValue.length));
            settextValue(temp);
        }
    };

    const handlePutCursor = (e) => {
        console.log(e.target);
        if(e.target)
        e.target.innerHTML+="<span class='cursor'>|</span>";
    };
    //kursor <i class="cursor"></i>
return (
        <div className="Edit" onClick={handlePutCursor}>
                {
                    textValue.map((e, index) => {
                        return(
                            
                            <div tabIndex={index+1} className="line " onKeyDown={handleDuplicateLine}>
                              
                                <span className="lineNumber">{index+1}</span>
                                <div className="lineContent">
                                    <code>
                                        {
                                            e.line.map((item, index2) => {
                                                    return(
                                                        <span>{item}</span>
                                                    )
                                            })
                                        }
                                   </code>
                                </div>
                            </div>
                        )
                    })
                }
              

          </div>
    )
}

