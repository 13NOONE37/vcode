import React from 'react';
import '../../css/PopWindows.css';
import NewProjectConfig from '../NewProjectConfig';

export default function NewProject() {
    
    const config = NewProjectConfig; //our project types config with all informations required to build window

    return (
        <div className="NewProject">
            <h1 className="titleOfDialog">Create new project
                <i class="far fa-question-circle" title="Choose type of project">
                </i>
            </h1>
            <div className="projectTypes">
                {
                    config.map((e, index) => {
                      return(
                          <div className="projectItem" 
                          onClick={e.projectAction}>
                                {e.projectThunbail}
                                <span>{e.projectName}</span>
                          </div>
                      )  
                    })
                }
                   
            </div>

        </div>
    )
}
