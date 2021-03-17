import React from 'react'
import '../css/Sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <span>
            <div className="item donate"><i class="fas fa-donate"></i></div>
            <div className="item"><i class="fas fa-search"></i></div>
            <div className="item"><i class="fas fa-save"></i></div>
            <div className="item"><i class="fas fa-download"></i></div>
            <div className="item"><i class="fab fa-github-square"></i></div>
            <div className="item"><i class="fas fa-share-alt-square"></i></div>
            </span>
           
            <span>
            <div className="item"><i class="fas fa-user"></i></div>
            <div className="item"><i class="fas fa-cog"></i></div>
            </span>
        </div>
    )
}
