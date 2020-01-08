import React from 'react';
import ReactPlayer from 'react-player';
import {f, database} from '../../../config/config'

export default class PlayVideo extends React.Component {
    state = {
        loggedIn : true
    }
    componentDidMount (){
        this.signInCheck()
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
    deletePhoto = (id) =>{
        console.log(id)
        database.ref('videos/'+id).remove()
    }
    render(){
        return (
            <div style = {{width : '33.3%'}}>
                
            <ReactPlayer url = {this.props.url}  />

                <section style = {{display: 'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
                    {this.state.loggedIn === true ? (
                    <button onClick = {() =>{
                        this.deletePhoto(this.props.videoId)
                    }}> Delete </button>
                ):
                (
                    <section></section>
                )}
                </section>
        </div>
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
