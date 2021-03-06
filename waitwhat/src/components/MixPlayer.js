import React from 'react';
import { Row, Col } from 'react-bootstrap';

class MixPlayer extends React.Component {
    state = {
        index: 3,
        currentTime: '0:00',
        musicList: [ 
            {             
                name: 'waitwhatever vol.2',  
                img: 'https://i1.sndcdn.com/artworks-000355290525-ogk37x-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '55:51'
            }, 
            {             
                name:'Wait, It\'s A Party',  
                img:'https://i1.sndcdn.com/artworks-000519093597-z6yp6v-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:02:42'
            }, 
            {             
                name: 'Wait, It\'s A Trap',    
                img: 'https://i1.sndcdn.com/artworks-000529520208-osnck5-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:07:28'
            }, 
            {             
                name: 'Wait, It\'s A Vibe',
                img: 'https://i1.sndcdn.com/artworks-000540635760-m4embi-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:21:00'
            }, 
            {             
                name: 'New Beginnings [Inauguration Mix]',  
                img: 'https://i1.sndcdn.com/artworks-TqadvSktTmo0u1gH-rzzFag-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:20:00'
            }, 
            {             
                name: 'love... is pain',  
                img: 'https://i1.sndcdn.com/artworks-ygBgcLOtteQFIKh5-AEsNiw-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:03:08'
            }, 
            {             
                name: 'love... is life',
                img: 'https://i1.sndcdn.com/artworks-ozKKH4D2D1Pr1l0D-XSmv0g-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:10:10'
            }, 
            {             
                name:'Blossoms in Spring',  
                img: 'https://i1.sndcdn.com/artworks-G64V75thK8VSRLKw-AYzFSw-t500x500.jpg',
                audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
                duration: '1:30:22'
            }, 
        ],
        pause: false,
  };

    componentDidMount() {
        this.playerRef.addEventListener("timeupdate", this.timeUpdate, false);
        this.playerRef.addEventListener("ended", this.nextSong, false);
        this.timelineRef.addEventListener("click", this.changeCurrentTime, false);
        this.timelineRef.addEventListener("mousemove", this.hoverTimeLine, false);
        this.timelineRef.addEventListener("mouseout", this.resetTimeLine, false);
    }

    componentWillUnmount() {
        this.playerRef.removeEventListener("timeupdate", this.timeUpdate);
        this.playerRef.removeEventListener("ended", this.nextSong);
        this.timelineRef.removeEventListener("click", this.changeCurrentTime);
        this.timelineRef.removeEventListener("mousemove", this.hoverTimeLine);
        this.timelineRef.removeEventListener("mouseout", this.resetTimeLine);
    }

    changeCurrentTime = (e) => {
        const duration = this.playerRef.duration;
        
        const playheadWidth = this.timelineRef.offsetWidth;
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;

        this.playheadRef.style.width = userClickWidhtInPercent + "%";
        this.playerRef.currentTime = (duration * userClickWidhtInPercent)/100;
    }

    hoverTimeLine = (e) => {
        const duration = this.playerRef.duration;
        
        const playheadWidth = this.timelineRef.offsetWidth
        
        const offsetWidht = this.timelineRef.offsetLeft;
        const userClickWidht = e.clientX - offsetWidht;
        const userClickWidhtInPercent = (userClickWidht*100)/playheadWidth;

        if(userClickWidhtInPercent <= 100){
        this.hoverPlayheadRef.style.width = userClickWidhtInPercent + "%";
        }
        
        const time = (duration * userClickWidhtInPercent)/100;
        
        if( (time >=0) && (time <= duration)){
        this.hoverPlayheadRef.dataset.content = this.formatTime(time);
        }
    }

    resetTimeLine = () => {
        this.hoverPlayheadRef.style.width = 0;
    }

    timeUpdate = () => {
        const duration = this.playerRef.duration;
        const timelineWidth = this.timelineRef.offsetWidth - this.playheadRef.offsetWidth;
        const playPercent = 100 * (this.playerRef.currentTime / duration);
        this.playheadRef.style.width = playPercent + "%";
        const currentTime = this.formatTime(parseInt(this.playerRef.currentTime));  
        this.setState({ 
        currentTime 
        });
    }

    formatTime = (currentTime) =>{
        const minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        console.log(currentTime);

        seconds = (seconds >= 10) ? seconds : "0" + seconds % 60;
        
        const formatTime = minutes + ":" +  seconds
        
        return formatTime;
    }

    updatePlayer = () =>{
        const { musicList, index } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        this.playerRef.load();
    }
  
    nextSong = () => {
        const { musicList, index, pause } = this.state;
    
        this.setState({ 
        index: (index + 1) % musicList.length
        });
        this.updatePlayer();
        if(pause){
        this.playerRef.play();
        }
    };

    prevSong = () => {
        const { musicList, index, pause } = this.state;  
        
        this.setState({ 
        index: (index + musicList.length - 1) % musicList.length
        });
        this.updatePlayer();
        if(pause){
        this.playerRef.play();
        }
    };

    playOrPause = () =>{
        const { musicList, index, pause } = this.state;
        const currentSong = musicList[index];
        const audio = new Audio(currentSong.audio);
        if( !this.state.pause ){
        this.playerRef.play();
        }else{
        this.playerRef.pause();
        }
        this.setState({
        pause: !pause
        })
    };
  
    clickAudio = (key) =>{
        const { pause } = this.state;
        
        this.setState({
        index: key
        });
        
        this.updatePlayer();
        if(pause){
        this.playerRef.play();
        }
    };
  
    render() {
        const { musicList, index, currentTime, pause } = this.state;
        const currentSong = musicList[index];
        console.log(currentSong);
        return (
            <div className="card">
                <Row className='current-song-row'>
                    <div className="current-song">
                        <audio ref={ref => this.playerRef = ref}>
                            <source src={ currentSong.audio } type="audio/ogg"/>
                            Your browser does not support the audio element.
                        </audio>
                        <Col xs={2}l>
                            <div className="img-wrap">
                                <img id="current-song-img" src={ currentSong.img }/>
                                <button onClick={this.playOrPause} className="play current-btn">
                                    {
                                        (!pause) ? <i className="fas fa-play"></i>
                                        :<i className="fas fa-pause"></i>
                                    }
                                </button>
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className="song-name">{ currentSong.name }</div>
                        </Col>
                        <Col xs={2}>
                            <div className="controls">            
                                <button onClick={this.prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                                <button onClick={this.nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                            </div>
                            <div className="time">
                                <div className="current-time">{ currentTime }</div>
                                /
                                <div className="end-time">{ currentSong.duration }</div>
                            </div>
                        </Col>
                    </div>
                    <div ref={ref => this.timelineRef = ref} id="timeline">
                        <div ref={ref => this.playheadRef = ref} id="playhead"></div>
                        <div ref={ref => this.hoverPlayheadRef = ref} className="hover-playhead" data-content="0:00"></div>
                    </div>
                </Row>
                <div className="play-list" >
                    {musicList.map( (music, key=0) =>
                        <Row 
                            key={key}
                            onClick={()=>this.clickAudio(key)}
                            className={
                                "music-player-row track " + 
                                (index === key && !pause ?'current-audio':'') + 
                                (index === key && pause ?'play-now':'')
                            }
                        >
                            <Col xs={2}>
                                <div className="img-wrap">
                                    <img src={music.img}/>
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div className="track-discr" >
                                    <span className="track-name" >{music.name}</span>
                                </div>
                            </Col>
                            <Col xs={2}>
                                <span className="track-duration" >
                                    {(index === key)
                                    ?currentTime
                                    :music.duration
                                    }
                                </span>
                            </Col>
                        </Row>
                    )}
                </div>
            </div>
        )
    }
}
  
export default MixPlayer;