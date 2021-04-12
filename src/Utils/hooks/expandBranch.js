import React from 'react'

export default function expandBranch(props) {
    return (
        <ul>
            {
                 props.content.map((item ,index)=>{
                    return(
                        <li className="structureItem">
                            {item.name}
                        
                        </li>
                    )
                 })
            }
        </ul>
    )
   
}













