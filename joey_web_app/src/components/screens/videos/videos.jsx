import React from 'react';
import ReactPlayer from 'react-player';
import {database} from '../../../config/config'
import {SharePost} from './shareVideos'

const styles = { 
    header : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: 'red',
        flexDirection : 'row',
        fontSize : 20,
        fontWeight : 'bold',
        backgroundColor :'black',
    },
    headerText :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'red',
        borderBottom: '2px solid green',
        backgroundColor: 'black',
        fontSize : 30,
        
    },
    videos :{
        display: "flex",
        flexDirection : 'row',
        flexWrap : 'wrap',
        overFlow: 'scroll',
    }, 
};
    
export class VideosScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latestVideo : {},
            mounted : false,
            selectVideo : false,
            videos : [],
            loadedVideos : false
        }
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
                        })
                } 
            }
            that.setState({mounted: true})
        }).catch(err => console.log(err))
    }
    componentDidMount(){
        this.getLatestVideo()
        this.getVideos()  
    }
    listVideo = () =>{
        if(this.state.mounted === true){
            return (
                <div style = {styles.videos}>
                    {
                        this.state.videos.map((item) => (
                                <ReactPlayer controls = {true} url = {item.uri}width = "33.3%"  />                     
                        ))
                    }
                </div>
            );
        }
    }
    
    render(){
        return (
            <React.Fragment  >
                <section>
                    { this.state.mounted === true ?(
                        <div>            
                                <h1 style = {styles.headerText}> Latest Video </h1>
                            <section style = {styles.header } >
                                <ReactPlayer url = {this.state.latestVideo.uri} controls = {true} fluid = {false} width= '60%' height = '400px'/> 
                                <section>
                                    <h5> {this.state.latestVideo.yearRelease }</h5>
                                    <p> {this.state.latestVideo.songTitle }, {this.state.latestVideo.artist } </p>
                                    <p> From The Album : {this.state.latestVideo.album }</p>

                                    <SharePost uri = {this.state.latestVideo.uri}/>

                                    
                                </section>
                            </section>
                                <h1 style= {styles.headerText}> More Videos </h1>
                                <section style = {styles.videoList}>
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