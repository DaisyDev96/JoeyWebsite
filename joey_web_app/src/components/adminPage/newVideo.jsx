import React from 'react';
import {storage, database} from '../../config/config'
import uniqueId from '../../uniqueId'


export default class VideoUpload extends React.Component {
    state = {
        vid :null,
        album: '',
        artist: '',
        songTitle : '',
        yearReleased: '',
        uniqueId :  uniqueId(),
        uri: '',
        name :''
        
    }
    onChangeText = (e) =>{
        if(e.target.files[0]){
            if(e.target.files[0].type[0] === 'v'){
                const vid = e.target.files[0]
                this.setState({vid, name: vid.name })
            }else {
                alert('upload videos here only')
            }
            
        }
    }
    handleUpload = () =>{
        var vid = this.state.vid;
        var that = this;
        const uploadTask = storage.ref(`videos/`+ this.state.uniqueId).put(vid);
        uploadTask.on('state_changed', (snapshot) =>{
            // display progress 
        },
        (err) =>{
            alert(err)
        }, 
        (complete) => {
            // once it's done downloading 
            storage.ref('videos').child(this.state.uniqueId).getDownloadURL().then(url  =>{
                that.UploadVideo(url)
            })
        });
    }
    UploadVideo = (uri) =>{
        console.log(this.state)
        if(uri !== '' && this.state.uniqueId !== ''){
            const videoObj = {
                uri:  uri,
                album: this.state.album,
                artist: this.state.artist,
                songTitle : this.state.songTitle,
                yearRelease : this.state.yearReleased,
            }
            database.ref('videos/'+ this.state.uniqueId).set(videoObj);
            this.setState({
                uri:  '',
                album: '',
                artist: '',
                songTitle : '',
                yearReleased: '',
                uniqueId : "",
                vid : null,
                name:''
            })
        }
        else{
            alert('missing uri')
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
            <React.Fragment >

                <section style = {styles.header}>
                <form>
                    <input type = "file"  onChange = {this.onChangeText}/> 
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
                </form>
                <button  onClick = {this.handleUpload}> upload </button>
            </section>
            </React.Fragment>
        );
        }
}
const styles = {
    container :{
        justifyContent: 'center', 
        alignItems:'center',  
        display: 'flex', 
        flexDirection:'column',
        backgroundColor: ' hsla(0, 0%, 0%,0.9)' ,
        color : 'white',
        marginTop: 5
    },
    header : {
        textAlign: 'center',
        color : 'red',
        justifyContent : 'center',
        alignContent : 'center',
    },
}