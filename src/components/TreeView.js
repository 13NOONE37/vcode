import React from 'react';
import '../css/TreeView.css';
import ExpandBranch from '../Utils/hooks/expandBranch';

import treeExample from '../Utils/ExampleFIleTree'; //only for test normally we fetch data from server but file structure build is execly the same like in file

export default function TreeView() {
    return (
        <div className="TreeView">
                {
                    <ExpandBranch content={treeExample}/>            
                }
        </div>
    )
}
