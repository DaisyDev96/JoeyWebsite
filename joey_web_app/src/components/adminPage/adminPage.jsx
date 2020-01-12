import React from 'react';
import {f, auth } from '../../config/config' 
import AdminLogin from './logIn'
import ImageUpload from './upload'
import YoutubeVideo from './uploadYoutubeVideo'
import VideoUpload from "./newVideo"
export  class AdminPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loggedIn : false

        }
    }
    componentDidMount = () =>{
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
    signOut = () =>{
        f.auth().signOut()
    }

    render(){

        return (
            <React.Fragment >
                {this.state.loggedIn === false ?( 
                <section style = {styles.header}>     
                        <AdminLogin/>
                    </section>
                ):
                (
                <section style = {{backgroundColor: ' hsla(0, 0%, 10%,0.9)'}}>              
                        <section style = {styles.header}>
                            <h1 style = {styles.headerText}> Upload Pictures </h1>
                            <ImageUpload />
                        </section>

                        <section style = {styles.header} >
                            <h1 style = {styles.headerText}> Upload Youtube Videos </h1>
                            <YoutubeVideo/>
                        </section>

                        <section style = {styles.header}>
                            <h1 style = {styles.headerText}> Upload regular Videos </h1>
                            <VideoUpload/>
                        </section>
                        <button onClick = {this.signOut} style = {{ backgroundColor: 'green', borderRadius: "50%" , width : '80px', margin: 10, marginLeft:'47%',height : '30px', }}> SignOut </button>
                    </section>
                )}
            </React.Fragment>
        );
        }
}
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
        display: 'flex', 
        justifyContent: 'center', 
        alignContent:'center',
        flexDirection : 'column'  

    }
};