import React, { useState } from 'react'
import "./_categoriesBar.scss";

const keywords = [
    "All",
    "React js",
    "React Native",
    "use of Api",
    "Redux",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Bangali Songs",
    "Coding",
    "Cricket",
    "Footbal",
    "Real Madrid",
    "Gatsby",
    "Poor Coder",
    "Shwetabh",
]
export default function CategoriesBar() {

    const [activeElement, setActiveElement] = useState('All')
    const handleClick = (value) => {
        setActiveElement(value)
    }
    
    return (
        <div className="categoriesBar">
            {
                keywords.map((value, i) =>(
                <span 
                onClick={() => handleClick(value)} 
                key={i}
                className={activeElement === value ? 'active' : ''}

                
                >{value}</span>
    
                    
                ))
            }

        </div>       
    )
}
