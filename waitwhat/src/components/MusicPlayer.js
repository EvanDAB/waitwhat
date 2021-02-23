import React from 'react';
import { Col } from 'react-bootstrap';

class MusicPlayer extends React.Component {
    state = {
      index: 3,
      currentTime: '0:00',
      musicList: [
        {
            name:'Alive (ft Rielle)',  
            img: 'https://i.scdn.co/image/ab67616d0000b27332d0d4b980975f3acb6af5b3', 
            audio:'https://open.spotify.com/track/0QVT76q62DksJ9Rq4DD4DH?si=e4dc16da3e9248b0', duration: '3:27'
        }, 
        {
            name:'Fall out Boy - Sugar We\'re Going Down (waitwhat & SEPPIE remix))',  
            img: 'https://i1.sndcdn.com/artworks-000478105290-dy5ofy-t500x500.jpg', 
            audio:'https://soundcloud.com/itswaitwhat/sugar-were-going-down-remix', duration: '3:03'
        }, 
        {
            name:'Doing Fine (ft Heather Summer)',  
            img: 'https://i1.sndcdn.com/artworks-000450549630-iarsst-t500x500.jpg', 
            audio:'https://open.spotify.com/track/5TWDxCLBBifqEAUpcZul1L?si=2c6eb4e19ca4472b', duration: '4:06'
        }, 
        {
            name:'Memories (Middle Child X waitwhat)',  
            img: 'https://i1.sndcdn.com/artworks-000477984969-3ubw2n-t500x500.jpg', 
            audio:'https://open.spotify.com/track/3WY23lIMGx0R1d1zjsfoBZ?si=ee3073d411fb402f', duration: '4:09'
        }, 
        {
            name:'People Change (ft JLa)',  
            img: 'https://i1.sndcdn.com/artworks-n8F8Ty0WSgymmGtr-2z5ANQ-t500x500.jpg', 
            audio:'https://open.spotify.com/track/38p9K0qS0KCcAEnv1Tcf5H?si=0f7036dc1c234769', duration: '3:15'
        }, 
        {
            name:'MRG feat Sweez - Brokenhearted (waitwaht remix)',  
            img: 'https://i1.sndcdn.com/artworks-BWbTfLjy4Q6fxHDF-TenSEw-t500x500.jpg', 
            audio:'https://open.spotify.com/track/5OHLzWBPw6q2WD42ewLH8a?si=e243713f4f504d41', duration: '2:18'
        }, 
        {
            name:'Dence - Fyre (waitwhat remix)',  
            img: 'https://i1.sndcdn.com/artworks-000605772112-xmsir2-t500x500.jpg', 
            audio:'https://open.spotify.com/track/39HNKxo525jfwOdCh5CCw3?si=d4e1716882224832', duration: '2:29'
        }, 
        {
            name:'Samsonite and Waitwhat - Somebody (ft Kristen Scheltens)',  
            img: 'https://ihouseu.com/wp-content/uploads/2020/06/waitwhat-Samsonite-Somebody-Feat.-Kristen-Scheltens-1.jpg', 
            audio:'https://open.spotify.com/track/7vspS9itHJqgGRXk74HrzR?si=fb10bd454d5f400c', duration: '3:17'
        }, 
        {
            name:'Tep No - Sippin\' on Feelings (SEPPIE & waitwhat remix)',  
            img: 'https://i1.sndcdn.com/artworks-Ruy6LqCrfTlAlaC8-TL4e5Q-t500x500.jpg', 
            audio:'https://open.spotify.com/track/3xvPkG7fAdJgPJ7baeZ8Zo?si=66bc0b96c1f149a4', duration: '2:55'
        }, 
        {
            name:'Sad Boi (ft Emilia Ali)',  
            img: 'https://i1.sndcdn.com/artworks-wzFcRymWKuYyaizn-vX13fg-t500x500.jpg', 
            audio:'https://open.spotify.com/track/04iEzw4RuYkEgaMcztQlst?si=30aa1e4a2f884d53', duration: '2:38'
        }, 
        {
            name:'Vanic - So Slow(feat K. Flay) (waitwhat remix)',  
            img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoundcloud.com%2Fitswaitwhat%2Fvanic-so-slow-waitwhat-remix&psig=AOvVaw2bxe8lvxznbMYwzTsEpYZJ&ust=1614192914282000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKiCt-HXgO8CFQAAAAAdAAAAABAD', 
            audio:'https://soundcloud.com/itswaitwhat/vanic-so-slow-waitwhat-remix', duration: '2:57'
        }, 
        {
            name:'One Last Time - waitwhat x Sweez',  
            img: 'https://i1.sndcdn.com/artworks-ww4zoN9DTYBFWLRm-YPeIIw-t500x500.jpg', 
            audio:'https://open.spotify.com/track/6XOko5cuKxCwVKUWpE9t9v?si=68f36de6ca914e45', duration: '3:00'
        }, 
        {
            name:'Do You Remember(feat Daramola)',  
            img: 'https://i1.sndcdn.com/artworks-GOLQv9uzxzqjtq39-6pogUg-t500x500.jpg', 
            audio:'https://soundcloud.com/itswaitwhat/do-you-remember', duration: '2:34'
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
    }
    
    clickAudio = (key) =>{
      const { pause } = this.state;
      
      this.setState({
        index: key
      });
      
      this.updatePlayer();
      if(pause){
        this.playerRef.play();
      }
    }
  
    
    render() {
      const { musicList, index, currentTime, pause } = this.state;
      const currentSong = musicList[index];
      console.log(currentSong);
      return (
        <div className="card">
            <div className='demo-card justify-content-right'>
                <Col>
                    <span>Play/Pause Icon</span>
                    <span>|</span>
                    <span>Song Name</span>
                </Col>
                
            </div>
            <div className="current-song">
                <audio ref={ref => this.playerRef = ref}>
                <source src={ currentSong.audio } type="audio/ogg"/>
                    Your browser does not support the audio element.
                </audio>
                <div className="img-wrap">
                    <img id="current-song-img" src={ currentSong.img }/>
                </div>
                <span className="song-name">{ currentSong.name }</span>
                <div className="time">
                <div className="current-time">{ currentTime }</div>
                <div className="end-time">{ currentSong.duration }</div>
                </div>
                
                <div ref={ref => this.timelineRef = ref} id="timeline">
                <div ref={ref => this.playheadRef = ref} id="playhead"></div>
                <div ref={ref => this.hoverPlayheadRef = ref} className="hover-playhead" data-content="0:00"></div>
                </div>
                
                <div className="controls">
                <button onClick={this.prevSong} className="prev prev-next current-btn"><i className="fas fa-backward"></i></button>
                <button onClick={this.playOrPause} className="play current-btn">
                    {
                    (!pause) ? <i className="fas fa-play"></i>
                    :<i className="fas fa-pause"></i>
                    }
                </button>
                <button onClick={this.nextSong} className="next prev-next current-btn"><i className="fas fa-forward"></i></button>
                </div>
                
            </div>
            {/* <div className="play-list" >
                {musicList.map( (music, key=0) =>
                    <div key={key} 
                        onClick={()=>this.clickAudio(key)}
                        className={"track " + 
                        (index === key && !pause ?'current-audio':'') + 
                        (index === key && pause ?'play-now':'')} >
                        
                        <img className="track-img" src={music.img}/>
                        <div className="track-discr" >
                            <span className="track-name" >{music.name}</span>
                        </div>
                        <span className="track-duration" >
                            {(index === key)
                                ?currentTime
                                :music.duration
                            }
                        </span>
                    </div>
                )}
            </div> */}
        </div>
      )
    }
  }
  
export default MusicPlayer;