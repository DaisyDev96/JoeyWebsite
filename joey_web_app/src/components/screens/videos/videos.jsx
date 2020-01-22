import React from 'react';
import {database, f,  auth } from '../../../config/config'
import LatestVideo from './latestVideo';
import PlayVideo from './playVideo'
const styles = { 
    headerText :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'red',
        borderBottom: '3px solid green',
        backgroundColor: 'black',
        fontSize : 30
    },
    videos :{
        display: "flex",
        flexDirection : 'row',
        flexWrap : 'wrap',
        overFlow: 'scroll',
    }, 
    header : {
        backgroundColor: ' hsla(0, 0%, 10%,0.9)'    
    },
    upload:{
        display: "flex",
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column'

    }
    
};

export class VideosScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latestVideo : {},
            mounted : false,
            selectVideo : false,
            videos : [],
            loadedVideos : false, 
            loggedIn : '',
            videoUpload : false,
            youTubeUpload : false

        }
    }
    signInCheck = () => {
        var that = this;
        f.auth().onAuthStateChanged(function(user){
            if(user){
                // user is logged in 
                that.setState({ loggedIn : true })
            }else {
                 // not logged in 
                that.setState({  loggedIn : false  })
            }
        })

    }
    getLatestVideo = () =>{
        var that = this;
        database.ref('videos/latestVideo').once('value').then(function(snapshot){
            const exists = (snapshot.val() !== null );  // lets us know it it was data returened 
            if(exists){
                that.setState({
                    latestVideo : snapshot.val(), 
                }) 
            } 
            
        }).catch(err => console.log(err)) 
    }
    getVideos = () =>{
        var that = this;
        database.ref('videos').once('value').then(function(snapshot) {
            const exists = (snapshot.val() !== null );
            if(exists){
                var videoData = snapshot.val()
                var temptVideos = that.state.videos
                for(var videoKey in videoData){
                    var videoObj = videoData[videoKey]

                    temptVideos.push({
                            album : videoObj.album,
                            uri : videoObj.uri,
                            artist : videoObj.artist,
                            songTitle : videoObj.songTitle,
                            yearRelease: videoObj.yearRelease,
                            videoId : videoKey
                        })       
                } 
            }
            that.setState({mounted: true})
        }).catch(err => console.log(err))
    }
    componentDidMount(){
        this.getLatestVideo()
        this.getVideos()  
        this.signInCheck()
    }
    
    listVideo = () =>{
        if(this.state.mounted === true){
            return (
                <div className = "row" style = {{ justifyContent:'center', width : '100%', backgroundColor:' hsla(0, 0%, 10%,0.9)', overflowX:'hidden' }}>
                    {
                        this.state.videos.map((item) => (
                               // <ReactPlayer controls = {true} url = {item.uri}width = "33.3%"  />
                                <PlayVideo  url = {item.uri} videoId = {item.videoId}/>

                        ))
                    }
                </div>
            );
        }
    }
    
    render(){
        return (
            <React.Fragment  >
                <section  >
                    { this.state.mounted === true ?(
                        <div>  
                            <section style = {styles.header}>
                                <h1 style= {styles.headerText}> Latest Video </h1>
                                <LatestVideo latestVideo = {this.state.latestVideo}/>
                            </section>

                            <section style = {styles.header}>
                                <h1 style= {styles.headerText}> More Videos </h1>
                                {this.listVideo()}                     
                            </section>
                            
                        </div>    
                    ):(
                        <p> Loading...</p>
                    )}
                </section>
            </React.Fragment>
        );
        }
}