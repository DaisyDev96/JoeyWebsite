import React from 'react';
import { database } from '../../config/config';


export default class YoutubeVideo extends React.Component {
    state = {
        uri:  '',
        album: '',
        artist: '',
        songTitle : '',
        yearReleased: '',
        uniqueId : ""
        
    }
    componentDidMount(){
        var uniqueId = this.uniqueId();
        this.setState({uniqueId})
    }
    uniqueId = () =>{
        return this.s4()  + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' +
        this.s4() + this.s4(); 
    }
    s4 = () =>{
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1)
    } 
    UploadVideo = () =>{

        if(this.state.uri !== '' && this.state.album !== '' && this.state.artist !== '' && this.state.yearReleased !== '' && this.state.songTitle !== ''){
            const videoObj = {
                uri:  this.state.uri,
                album: this.state.album,
                artist: this.state.artist,
                songTitle : this.state.songTitle,
                yearRelease : this.state.yearReleased,
            }
            database.ref('videos/'+this.state.uniqueId).set(videoObj);
            this.setState({
                uri:  '',
                album: '',
                artist: '',
                songTitle : '',
                yearReleased: '',
                uniqueId : ""
            })
        }
        else{
            alert('missing some info')
        }
    }
    updateUri = (e) =>{
        e.preventDefault()
        this.setState({uri : e.target.value})
    }
    updateAlbum = (e) =>{
        e.preventDefault()
        this.setState({album : e.target.value})
    }
    updateArtist = (e) =>{
        e.preventDefault()
        this.setState({artist : e.target.value})
    }
    updateTitle = (e) =>{
        e.preventDefault()
        this.setState({songTitle : e.target.value})
    }
    updateDate = (e) =>{
        e.preventDefault()
        this.setState({yearReleased : e.target.value})
    }
    render(){
        return (
            <section style = {styles.header}>
                <form>
                        uri:
                        <input type="text" value={this.state.uri} onChange = {this.updateUri}  />

                    <label>
                        album:
                        <input type="text" value={this.state.album} onChange = {this.updateAlbum}  />
                    </label>

                    <label>
                        artist:
                        <input type="text" value={this.state.artist} onChange = {this.updateArtist}  />
                    </label>
                    <label>
                        songTitle:
                        <input type="text" value={this.state.songTitle} onChange = {this.updateTitle}  />
                    </label>

                    <label>
                        date :
                        <input type="date" value={this.state.yearReleased} onChange =  {this.updateDate} />
                    </label>
                    <input type="submit" value="Submit"  onClick = {this.UploadVideo}/>
                </form>
            </section>
        );
    }
}

const styles = { 
    header : {
        textAlign: 'center',
        color : 'red',
        justifyContent : 'center',
        alignContent : 'center',
    },

};
