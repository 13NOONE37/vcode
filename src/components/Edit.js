import React, { useRef, useState } from 'react';
import '../css/Edit.css';

export default function Edit(props) {
    
    const textarea = useRef(null);
    const [textValue, settextValue] = useState([
        {       isClicked: false,
                line: [
                    'hello',
                    ' ',
                    '1'
                ],
        },
        {       isClicked: false,
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
        {       isClicked: false,
            line: [
                'hello',
                ' ',
                '1'
            ],
        },
        {       isClicked: false,
            line: [
                'hello',
                ' ',
                '1'
            ],
        },
        {       isClicked: false,
            line: [
                'hello',
                ' ',
                '1'
            ],
        },
    
    ]);
    
    
    


    function handleFocusStop(e){
         e.target.className="line ";
    }
/**rozwiazac wyswietlanie nie poprzez text area a divy z numerami lini przed jak tu https://jsfiddle.net/ourcodeworld/o4k7rfu0/1/  */
  
return (
        <div className="Edit" onKeyDown={()=>{console.log("keydown")}}>

                {
                    textValue.map((e, index) => {
                        return(
                            
                            <div  onClick={(f)=>{
                                                e.isClicked = !e.isClicked; 
                                                if(e.isClicked) f.currentTarget.className=' lineFocused';
                                                if(e.isClicked==false) f.currentTarget.className='line ';
                                            }} 
                                                className='line '>
                              
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

