import React from 'react';
import './progress-bar.css';
import HandleError from '../../error/containers/handle-error';

function ProgressBar (props) {
    return(
        <div className="ProgressBar">
            <input
                type="range"
                min={0}
                //max={props.duration}
                max= {props.max}
                value={props.value}
                onChange={props.handleProgressChange}
            />

        </div>

    )
}

export default ProgressBar;