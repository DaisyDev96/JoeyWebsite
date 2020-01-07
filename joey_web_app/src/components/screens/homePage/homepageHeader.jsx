import React from 'react';
import joey from '../../../media/joey.jpeg'
import SocialMedia from './socialMedia'


export default class HomeHeader extends React.Component {
    render(){
        return (
            <React.Fragment >
                <section style = {styles.headerText}>
                    <h1> Joey Tre' </h1>
                    <h2> A True HIP HOP Artist</h2>
                    <h3> Streaming on All Major Platforms</h3>
                    <img src = {joey} style ={{width : '25%', height : '25%'}}/>
                    <SocialMedia/>
                </section>
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
        backgroundColor: ' hsla(0, 0%, 10%,0.9)', 
        
    },
}