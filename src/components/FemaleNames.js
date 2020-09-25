import React from 'react';
import NamesData from '../babyNamesData.json';


function FemaleNames(){
    
    return (
        <div className="femaleNamesDiv">
            {NamesData.map((item) => {
              if(item.sex === 'f'){
              return <button className="fBtn">{item.name}</button>

              }
           })}
        </div>
    )
}

export default FemaleNames;