import React from 'react';
import '../../css/PopWindows.css';

function addFile() {
    return(
        <div className="openFile">
            <h1>Open file 
                <i class="far fa-question-circle" title="Add file to your project">
                </i>
            </h1> 
            <div className="openOption">
                <i class="fas fa-upload"></i>
                <h2>From PC</h2>
            </div>
            <div className="openOption">
                <i class="fas fa-cloud-upload-alt"></i>
                <h2>From VCloud</h2>
            </div>
        </div>
    );
}
export default addFile;
