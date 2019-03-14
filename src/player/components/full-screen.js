import React from 'react';
//import Control from '../../icons/components/control.js';
import FullScreenIcon from '../../icons/components/full-screen.js';

import './full-screen.css';

const FullScreen = (props) => (
    <div className="FullScreen">
        <button
            onClick={props.handleFullScreenClick}
        >
            <FullScreenIcon 
            size = {10} 
            color = "#fff"
            /> 
        </button>
    </div>

)

export default FullScreen;
