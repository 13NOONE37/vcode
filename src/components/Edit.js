import React, { useRef, useState } from 'react';
import '../css/Edit.css';

export default function Edit(props) {
    
    const textarea = useRef(null);
    const [textValue, settextValue] = useState([{isClicked: false, nr: 1, line: <span>hello world</span>, elements: {e1:'span',}},]);
    
    
    function setCursorValues(){
        /*let totalLine=props.cursorPosition.totalLine;
        let line=props.cursorPosition.line;
        let col=props.cursorPosition.col;

        //set total line 
        totalLine = (textValue.match(new RegExp("\n", "g")) || []).length +1;
        
        //set line


        //set col
        

        //set all values
        props.setcursorPosition({totalLine: totalLine, line:line, col:col});
        console.log(props.cursorPosition);*/
    }

    function handleKeyDown(e){/*
        setCursorValues(); //set position of cursor

    //basic features 
        //tabulator
        if(e.keyCode==9){ 
            e.preventDefault(); 
            settextValue(textValue+'\t');//replace with function that put char in current cursor position
        }*/
    }

    function handleTextChange(e){/*
        e.preventDefault();
        let line = e.target.value;
     if(e.target.value[textValue.length] == ':'){
            settextValue(textValue+': ;');
        console.log("colan");
        }

        settextValue(line);*/
    }

    function handleFocus(e){
         e.target.className+=" lineFocused";
    }

    function handleFocusStop(e){
         e.target.className="line ";
    }
/**rozwiazac wyswietlanie nie poprzez text area a divy z numerami lini przed jak tu https://jsfiddle.net/ourcodeworld/o4k7rfu0/1/  */
   
return (
        <div className="Edit" onKeyDown={handleKeyDown}>

                {
                    textValue.map((e, index) => {
                        return(
                            <div className="line " >
                                <span className="lineNumber">{e.nr}</span>
                                <div className="lineContent">
                                    {e.line}
                                </div>
                            </div>
                        )
                    })
                }
              

          </div>
    )
}
