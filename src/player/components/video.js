import React, {Component} from 'react';
import './video.css'

class Video extends Component {
    togglePlay(){
        if(this.props.playing){
            this.video.play()
        } else {
            this.video.pause()
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.playing !== this.props.playing){
            this.togglePlay();
        }
    }

    setRef = element => {
        this.video = element;
    }
    
    render(){
        const{
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked,
            handleReady,
            handleClick,
        } = this.props;

        return(
            <div className="Video">
                <video
                autoPlay={this.props.autoplay}
                src={this.props.src}
                ref={this.setRef}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onSeeking={handleSeeking}
                onSeeked={handleSeeked}
                onCanPlayThrough={handleReady}
                onClick= {handleClick}
                />
        </div>
        )
    }
}

export default Video;