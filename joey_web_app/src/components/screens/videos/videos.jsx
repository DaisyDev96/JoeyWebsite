import React from 'react';
import ReactPlayer from 'react-player';
import './videos.css'
import {database} from '../../../config/config'

const styles = { 
    header : {
        textAlign: 'center',
        color : 'black',
        justifyContent : 'center',
        alignContent : 'center',
        backgroundColor : 'red',
        width : '90%',
        marginLeft: '5%'
    },
    headerText :{
        borderBottomColor : 'black',

    }
};
    
export class VideosScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latestVideo : {},
            mounted : false 
        }
    }
    
    getLatestVideo = () =>{
        var that = this;
        database.ref('videos/lattestVideo').once('value').then(function(snapshot){
            const exists = (snapshot.val() !== null );  // lets us know it it was data returened 
            if(exists){
                that.setState({
                    latestVideo : snapshot.val(), 
                    mounted : true
                }) 
            } 
        }).catch(err => console.log(err)) 
        
    }
    componentDidMount(){
        this.getLatestVideo()
    }
    
    render(){
        return (
            <React.Fragment  >
                { this.state.mounted === true ?(
                    <section style = {styles.header } >
                    <h1> Latest Video </h1>
                        <ReactPlayer url = {this.state.latestVideo.uri} controls = {true}/>             
                </section>
                ):(
                    <p> Loading...</p>
                )}
                
            </React.Fragment>
        );
        }
}