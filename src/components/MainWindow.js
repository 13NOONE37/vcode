import React, { useEffect, useRef, useState } from 'react';
import '../css/MainWindow.css';
import TreeView from './TreeView';
import Edit from './Edit';
import View from './View';


export default function MainWindow(props) {


    const [width, setwidth] = useState({tree: 400, edit:400});
    const [currentWidth, setcurrentWidth] = useState(null);


    function checkWidth(){
        const box = document.querySelector('.MainWindow'); 
        return box.clientWidth;
    }

    useEffect(() => {
            setcurrentWidth(checkWidth());
            // make seting deafult widths
            //console.log({tree: currentWidth/2, edit: currentWidth/2});

            window.addEventListener("resize", (e)=>{
                setcurrentWidth(checkWidth());
            });
    }, []); 

   
    const [maxSize, setmaxSize] = useState(null);

    const handleMouseCursor = (event)=>{
        if(event.target.id=='first') setmaxSize(400);
        /**TODO set max size for sec, it cant be larger than currentWidth-tree width */
        if(event.target.id=='sec') setmaxSize(currentWidth);
    
        if(event.clientX<maxSize){
            if(maxSize==400) setwidth({tree:event.clientX-(window.innerWidth-currentWidth), edit: width.edit});
            if(maxSize==currentWidth) setwidth({tree:width.tree, edit: event.clientX-(window.innerWidth-currentWidth+width.tree)});
            setmaxSize(null);//bug prevent
        }
        console.log(event.clientX);
    } 
    function handleMouseDown(e){
        console.log("down", e.target);
        window.addEventListener("mousemove", handleMouseCursor);
        window.addEventListener('mouseup', handleMouseUp);
    }
    function handleMouseUp(e){
        console.log("up");
        window.removeEventListener("mousemove", handleMouseCursor);
    }
    /**ATENTION!!!!!! jesli apka laguje nalezy poprawic te eventListenery( 2 listener w handleMouseDown nie jest usuwany) */

    return (
        <div className="MainWindow" style={{gridTemplateColumns:`${width.tree}px 6px ${width.edit}px 6px auto`}}>
             <div className="resizableElement">
                    <TreeView /> 
                </div>
                    <div onMouseDown={handleMouseDown} id="first" className="react-resizable-handle-se"></div>
                <div className="resizableElement">  
                    <Edit cursorPosition={props.cursorPosition} setcursorPosition={props.setcursorPosition}  fileType={props.fileType} errors={props.errors} seterrors={props.seterrors} />
                </div>
                    <div onMouseDown={handleMouseDown} id="sec" className="react-resizable-handle-se"></div>
                <div className="resizableElement">
                    <View />
                </div>
            
                
        </div>
    )
}
