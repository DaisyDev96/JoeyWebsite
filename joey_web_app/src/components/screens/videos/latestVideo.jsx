import React from 'react';
import ReactPlayer from 'react-player';
import {SharePost} from './shareVideos'

export default class LatestVideo extends React.Component {
    render(){
        return (
            <React.Fragment >
                    <section style = {styles.latestVideo } >         
                        <ReactPlayer url = {this.props.latestVideo.uri} controls = {true} fluid = {false} width= '60%' height = '400px'/> 
                        <section>
                            <h6> {this.props.latestVideo.yearRelease } &#169; </h6>
                            <p> {this.props.latestVideo.songTitle }, {this.props.latestVideo.artist } </p>
                            <p> From The Album : {this.props.latestVideo.album }</p>
                            <SharePost uri = {this.props.latestVideo.uri}/>      
                        </section>
                    </section>
            
            </React.Fragment>
        );
        }
}
const styles = { 
    latestVideo : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
        fontSize : 20,
        fontWeight : 'bold',
    },
    headerText :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'red',
        borderBottom: '3px solid green',
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
    