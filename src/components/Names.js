import React from 'react';
import FemaleNames from './FemaleNames';
import MaleNames from './MaleNames';


function GetNames(){
    return (
        <div className="nameDiv">
           <FemaleNames />
           <MaleNames />
        </div>
    )
}

export default GetNames;