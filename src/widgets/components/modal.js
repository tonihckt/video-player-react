import React from 'react';
import './modal.css';

function Modal (props){
    return(
        <div className="Modal">
            {props.children}
       

    {/*
            <button 
                onClick={props.handleClick}
                className="Modal-close"
            />
    */}
            <button  onClick={props.handleClick} className="Modal-close-container" >
                <div className="Modal-leftright"></div>
                <div className="Modal-rightleft"></div>
                {/*
                <label class="Modal-close">close</label>
                */}
            </button>

    
        </div>
    )
}
export default Modal;