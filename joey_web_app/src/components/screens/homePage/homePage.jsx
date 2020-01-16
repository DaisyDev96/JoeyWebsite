import React from 'react';
import HomeHeader from './homepageHeader.jsx'
import {database} from '../../../config/config'
import LatestVideo from '../videos/latestVideo'
import Bio from './bio'
import Contact from './contact'
import { wrap } from 'module';
export class HomePageScreen extends React.Component {
    state = {
        latestVideo :{},
        mounted : false
    }
    getLatestVideo = () =>{
        var that = this;
        database.ref('videos/latestVideo').once('value').then(function(snapshot){
            const exists = (snapshot.val() !== null );  // lets us know it it was data returened 
            if(exists){
                that.setState({
                    latestVideo : snapshot.val(), 
                    mounted: true
                }) 
            } 
            
        }).catch(err => console.log(err)) 
    }
    componentDidMount(){
        this.getLatestVideo()
    }
    render(){
        return (
            <React.Fragment >
                { this.state.mounted === true ?( 
                        <div >
                            <HomeHeader/>
                            <section style = {styles.header}>
                                <h1 style = {styles.headerText}> Latest Video </h1>
                                <LatestVideo latestVideo = {this.state.latestVideo}/>
                            </section>

                            <section style = {styles.header}>
                                <h1 style = {styles.headerText}> Bio </h1>
                                <Bio/>
                            </section>

                            <section style = {styles.header}>
                                <h1 style = {styles.headerText}> Contact </h1>
                                <Contact/>
                            </section>

                        </div>
                    ):
                    (
                        <h1> Loading... </h1>
                    )
                }
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
    header : {
        backgroundColor: ' hsla(0, 0%, 0%, .9)',  
    },
    
}