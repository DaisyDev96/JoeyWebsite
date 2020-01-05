import React from 'react';
import ReactPlayer from 'react-player';

export default class PlayVideo extends React.Component {
    render(){
        return (
            <section style = {styles.header}>
                <ReactPlayer url = {this.props.uri} controls = {true}/>
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
