import React from 'react';
import './play-pause.css'; 
import Control from '../../icons/components/control.js';

function PlayPause (props){
    return(
        <div className='PlayPause'>

        <button onClick={props.handleClick}>
        {
            props.playing
            ?<Control.PlayIcon size={20} color="red" />
            :<Control.PauseIcon size={20} color="red" />
        }
        </button>
        
        {/*
        props.pause ?
            <button
            onClick={props.handleClick}
            >
            <Control.Play size={50} color="red" />
            </button>
        :
            <button
            onClick={props.handleClick}
            >
                <Control.Pause size={50} color="red" />
            </button>        
        */}
        </div>
    )
}

export default PlayPause;