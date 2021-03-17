import React from 'react';
import '../../css/PopWindows.css';
import NewProjectConfig from '../NewProjectConfig';


export default function NewProject() {
    
    const config = NewProjectConfig; //our project types config with all informations required to build window

    return (
        <div className="openFile" id="our">
            <h1 className="titleOfDialog">Save as
            <i class="far fa-question-circle" title="Add file to your project">
                </i>
            </h1>
            <div className="openOption">
                <i class="fab fa-google-drive"></i>
                <h2>Save to cloud</h2>
            </div>
            <div className="openOption" >
            <i class="fas fa-file-archive"></i>
                <h2>Save on your Device</h2>
            </div>
        </div>
    )
}
