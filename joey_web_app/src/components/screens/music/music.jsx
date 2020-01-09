import React from 'react';
import LatestAlbum from './lattestAlbum'
import {database} from '../../../config/config'
import Album from './displayAlbum'
export  class MusicScreen extends React.Component {
    state = {
        mounted : false,
        albums :[],

    }
    componentDidMount() {
        this.getAlbums()
    }
    getAlbums = () =>{
        var that = this;
        database.ref('albums').once('value').then(function(snapshot) {
            const exists = (snapshot.val() !== null );
            if(exists){
                var musicData = snapshot.val()
                var temptMusic = that.state.albums
                for(var albumKey in musicData){
                    var albumObj = musicData[albumKey]
                    temptMusic.push({
                            songs : albumObj.songs,
                            date: albumObj.date,
                            artWorkUri : albumObj.artWork,
                            title : albumObj.title
                        })               
                } 
            }
            that.setState({mounted: true})
        }).catch(err => console.log(err))
    }
    listAlbums = () =>{
        if(this.state.mounted === true){
            return (
                <div>
                    {
                        this.state.albums.map((item) => (
                            <Album songs = {item.songs} title = {item.title} date = {item.date} cover = {item.artWorkUri}/>
                        ))
                    }
                </div>
            );
        }
    }

    render(){
        return (
            <React.Fragment >
                {this.state.mounted === true ? (
                <section style = {{ backgroundColor :'hsla(0, 0%, 10%,0.9)' }}>
                    <h1 style = {styles.headerText}> Music </h1>
                    {this.listAlbums()}
                </section>
                

                ):(
                    <section></section>
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