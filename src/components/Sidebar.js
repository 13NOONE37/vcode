import React from 'react'
import '../css/Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <span>
                {/* TODO add tooltip animable, wyskakuje po prawo z takim fajnym trójktątnym początkiem. usunac title */}
                <div className="item donate" title="Support VCode"><i class="fas fa-donate"></i></div>
                <div className="item"><i class="fas fa-search" title="Search whatever you want"></i></div>
                <div className="item"><i class="fas fa-save" title="Save project"></i></div>
                <div className="item"><i class="fas fa-download" title="Download project on your device"></i></div>
                <div className="item"><i class="fab fa-github-square" title="Connect with github"></i></div>
                <div className="item"><i class="fas fa-share-alt-square" title="Share project other person"></i></div>
                <div className="item"> <i class="fab fa-google-drive" title="Save on google drive"></i></div>
            </span>
           
            <span>
                <div className="item"><i class="fas fa-user" title="Your profile"></i></div>
                <div className="item"><i class="fas fa-cog" title="Settings/Prefrences"></i></div>
            </span>
        </div>
    )
}
