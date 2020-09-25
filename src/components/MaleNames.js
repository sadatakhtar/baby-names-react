import React from 'react';
import NamesData from '../babyNamesData.json';


function MaleNames(){
    
    return (
        <div className="maleNamesDiv">
            {NamesData.map((item) => {
              if(item.sex === 'm'){
              return <button className="mBtn">{item.name}</button>

              }
           })}
        </div>
    )
}

export default MaleNames;