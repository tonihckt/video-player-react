import React, {Component} from 'react';
import VideoPlayerLayout from '../components/video-player-layout.js';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause.js';
import Timer from '../components/timer.js';
import VideoPlayerControls from '../components/video-player-controls.js';
import { formatedTimer } from'../components/time-utilities.js';
import TimeFormat from'../components/time-format.js';
import ProgressBar from '../components/progress-bar.js';
import Spinner from '../components/spinner.js';
import Volume from '../components/volume.js';
import FullScreen from '../components/full-screen.js';

import { formatTime, isFullScreen, requestFullScreen, exitFullScreen } from '../../libs/utilities.js'


class VideoPlayer extends Component{
    state= {
        playing: false,//estado inicial
        duration:'00:00',//duracion del video
        tiempo:'00:00',//tiempo para el uso en el Timer
        
        currentTime: '0 : 00',
        timeFloat: 0,
        durationFloat: 0,
        
        loading:false,
        volume: 1,
        mute: false,

    }
  /* Play-Pause---------------------------------------- */

    togglePlay = (event) => {
        this.setState({
            playing: !this.state.playing,
        })
        /*
        this.setState( prevState => ({ // --- se puede pasar una funcion que recibira el state anterior por defecto
            playing: ! prevState.playing // --- toggling
          })
        )
        */
    }
    componentDidMount(){
        this.setState({
            playing:!this.props.autoplay,
        })
    }
    handleLoadedMetadata = (event) => {
        this.video = event.target;
        this.video.volume = this.state.volume;
        this.setState ({
            duration: TimeFormat(this.video.duration),
            durationFloat: this.video.duration,
            loading      : false,
        });
    }
    
    handleTimeUpdate = (event) => {
        //console.log(this.video.currentTime)
        this.setState({
            currentTime: TimeFormat(this.video.currentTime),
            timeFloat: this.video.currentTime,
        })
    }

    handleProgressChange = (event) => {
        this.video.currentTime = event.target.value
    }
// elemeto carga
    handleSeeking = (event) => {
        this.setState({
            loading:true,
        })
        this.togglePlay()
    }
// elemto deja de cargar
    handleSeeked = (event) => {
        this.setState({
            loading:false,
        })
        this.togglePlay()
    }
//carga conexión lenta
    handleReady = event => {
        this.setState({
          loading: false,
        })
    }


  /* Volume---------------------------------------- */

    handleVolumeChange = (event) => {
        this.video.volume = event.target.value;
        this.setState({ volume: this.video.volume })
        //this.setState({ volume: event.target.value }) 

    }
    toggleMute = event => {
        this.setState({
          mute: ! this.state.mute
        })
        this.video.muted  = ! this.state.mute
        this.slider.value = ! this.state.mute ? 0 : this.state.volume
    }

    setRefSlider = element => {
        // --- el input:range ha sido capturado a traves de todos los nivels de componentes
        this.slider = element
      }
  /* FullScreen---------------------------------------- */

    handleFullScreenClick = (event)=>{
        /*
        if(document.webkitIsFullScreen){
            document.webkitExitFullscreen()
          } else if(document.mozFullScreen) {
            document.mozCancelFullScreen()
          } else{
            if ( this.player.webkitRequestFullscreen ) {
              this.player.webkitRequestFullscreen()
            } else if ( this.player.mozRequestFullScreen ) {
              this.player.mozRequestFullScreen()
            }
        }
        */

       if( ! isFullScreen() ) {
        requestFullScreen( this.player )
      } else {
        exitFullScreen( this.player )
      }
    }

    setRefPlayer=(element)=>{
        this.player = element;
    }

    render () {
        return(
            <VideoPlayerLayout
                setRefPlayer = {this.setRefPlayer}
            >
            
                <Title 
                    title={this.props.title}
                />
                <VideoPlayerControls>
                    <PlayPause
                        handleClick = {this.togglePlay}
                        playing     = {this.state.playing}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        //duration={this.state.duration}
                        //value={this.state.currentTime}
                        value = {this.state.timeFloat}
                        max   = {this.state.durationFloat}
                        handleProgressChange={this.handleProgressChange}
                        
                    />
                    <Volume 
                    handleVolumeChange={this.handleVolumeChange}
                    handleVolume = {this.handleVolumeChange}
                    handleClick  = {this.toggleMute}
                    mute         = {this.state.mute}
                    volume       = {this.state.volume}
                    setRefSlider = {this.setRefSlider}
                    /> 
                    <FullScreen
                    handleFullScreenClick={this.handleFullScreenClick} 
                    />
                </VideoPlayerControls>
                <Spinner 
                    active={this.state.loading}
                />
                
                <Video
                    autoplay={this.props.autoplay}
                    playing={this.state.playing}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    handleReady={this.handleReady}
                    //src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;