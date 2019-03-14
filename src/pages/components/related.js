import React from 'react';
import logo from '../../../images/logo-eyes-white.png';
import './related.css';
//import EyeLogoIcon from '../../icons/components/EyeLogoIcon.js';


function Related (props){
    return(
        <div className="Related">
            <img src={logo} width={250} />
            {/*
            <EyeLogoIcon
                size = {10} 
                color = "#fff"
            />
            */}
        </div>
    )
}
export default Related;