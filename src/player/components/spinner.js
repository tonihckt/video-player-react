import React from 'react';
import './spinner.css';

function Spinner(props){
    if (!props.active) return null
    return(
    /*
        <div className="Spinner">
            <span>Cargando...</span>
        </div>
    */
   <div className="Spinner">
        <div className="Spinner-load-dots">
            <span>L o a d i n g</span>
            <span className="dot one">.</span>
            <span className="dot two">.</span>
            <span className="dot three">.</span>
        </div>
    </div>
    )
}

export default Spinner;