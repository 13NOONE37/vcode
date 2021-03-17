import React, { useEffect, useRef } from 'react';
import '../../css/PopWindows.css';


function OpenProject() {
    
    const input = useRef();

    function handleFileUploaded() {
        const selectedFiles = [...input.current.files];
        uploadFileToAPI(selectedFiles);
        
    }

    function handleDragEnter(e){
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDragOver(e){
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDrop(e){
        e.stopPropagation();
        e.preventDefault();

        const data = e.dataTransfer;
        const files = [...data.files];
        uploadFileToAPI(files);
    }

    function uploadFileToAPI(data){
     
      console.log(data);

       
    }
    
    return (
        <div className="openFile" id="our">
            <h1 className="titleOfDialog">Open project
            <i class="far fa-question-circle" title="Add file to your project">
                </i>
            </h1>
            <div className="openOption">
                <i class="fas fa-cloud-upload-alt"></i>
                <h2>Recent Projects</h2>
            </div>
            <div className="openOption" onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDrop={handleDrop}>
                <i onClick={()=>{input.current.click()}} class="fas fa-upload"></i>
                <h2>From PC</h2>
                <input 
                    style={{display:'none'}} 
                    ref={input} 
                    type="file"
                    multiple
                    onChange={handleFileUploaded}
                    />

            </div>
        </div>
    );
}
export default  OpenProject;
