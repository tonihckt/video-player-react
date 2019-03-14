import React, { Component } from 'react'
import './volume.css';
//import Control from '../../icons/components/control.js';
//import HighVolumeIcon from '../../icons/components/high-volume.js';
//import MuteVolumeIcon from '../../icons/components/mute-volume.js';

import VolumeIcon from '../../icons/components/volume.js';
import VolumeSlider from './volume-slider.js'




/*
function Volume(props){
    return(
        <button className="Volume">
            <div onClick={props.handleMuteVolume}>
            {
                props.muted?
                <VolumeIcon color="red" size={20} />
                :
                <VolumeIcon color="blue" size={20} />
            }
            </div>

            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={0.25}
                    onChange={props.handleVolumeChange}
                    value={props.volume}   
                />
            </div>
        </button>
    )
}
*/

class Volume extends Component{
    render(){
        return (
          <div className = "Volume">
            <button onClick = {this.props.handleClick}>
              {
                this.props.mute ?
                  <VolumeIcon size = {25} color = "red" />
                :
                  <VolumeIcon size = {25} color = "blue" />
              }
            </button>
            <VolumeSlider
              handleVolume = {this.props.handleVolume}
              mute         = {this.props.mute}
              setRefSlider = {this.props.setRefSlider}
            />
          </div>
        )
      }
}

export default Volume;

