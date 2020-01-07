import React from 'react';
import ImageUpload from './upload'
import Photo from './displayPhotos'
import { database } from '../../../config/config';

export  class PhotosScreen extends React.Component {
    state = {
        photos : [],
        mounted : false, 
        loggedIn : false
    }
    componentDidMount (){
        this.getPhotos()
    }
    getPhotos = () =>{
        var that = this;
        database.ref('photos').once('value').then(function(snapshot) {
            const exists = (snapshot.val() !== null );
            if(exists){
                var photoData = snapshot.val()
                var temptPhotos = that.state.photos
                for(var photoKey in photoData){
                    var photo = photoData[photoKey]        
                    temptPhotos.push({
                            uri : photo,
                            key : photo
                        })      
                } 
            }
            that.setState({mounted: true})
        }).catch(err => console.log(err))
    }
    addPhoto = (photoObj) =>{
        this.setState({ photos : [...this.state.photos, photoObj]})
    }
    listPhotos= () =>{
        if(this.state.mounted === true){
            return (
                <div style ={styles.row}>
                            {
                                this.state.photos.map((item) => (
                                <Photo url = {item.uri}  key={item.photo} />  
                                ))
                            } 
                </div>
            );
        }
    }
    render(){
        return (
            <React.Fragment >
                {this.state.loggedIn === true ?(
                    <section style ={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                    <ImageUpload addPhoto = {this.addPhoto}/>
                </section>
                ):(
                    <section></section>
                )}

                {this.state.mounted === true ?(
                    <section style = {styles.header}>
                        <h1 style= {styles.headerText}> Gallery  </h1>  
                        {this.listPhotos()}                 
                </section>
                ):
                (
                    <p> Loading .... </p>
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
    photos :{
        display: "flex",
        flexDirection : 'row',
        flexWrap : 'wrap',
        overFlow: 'scroll',
    }, 
    header : {
        backgroundColor: ' hsla(0, 0%, 10%,0.9)',
    }, 
    row : {
        display: "flex",
        flexWrap : 'wrap',
        marginLeft : "5%"
        
    },
}