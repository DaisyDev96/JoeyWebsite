import React from 'react';
import {storage, database} from '../../../config/config'
import uniqueId from '../../../uniqueId'


export default class ImageUpload extends React.Component {
    state = {
        img :null,
    }
    onChangeText = (e) =>{
        if(e.target.files[0]){
            const img = e.target.files[0]
            this.setState({img })
        }
    }
    handleUpload = () =>{
        var img = this.state.img;
        this.setState({name: img.name})
        var id = uniqueId();

        const uploadTask = storage.ref(`images/${img.name}`).put(img);
        uploadTask.on('state_changed', (snapshot) =>{
            // display progress 
        },
        (err) =>{
            alert(err)
        }, 
        (complete) => {
            // once it's done downloading 
            storage.ref('images').child(img.name).getDownloadURL().then(url  =>{
                database.ref('photos/'+id).set(url)
                var photoObj ={
                    uri: url, 
                    key: url
                }
                
                this.props.addPhoto(photoObj)
            })
            this.setState({ img : null })
        });

    }
    render(){
        return (
            <React.Fragment >
                <div style= {styles.container}>
                    <p style = {styles.headerText}>Upload Pictures</p>
                    <input style= {{ marginLeft :'65%'}}type = "file"  onChange = {this.onChangeText}/> 
                    <button onClick = {this.handleUpload} style ={{    marginTop: 5 , height: 25,  paddingVertical :10,
                    paddingHorizontal:10,
                    backgroundColor: 'red',
                    borderRadius: 5}}
                    >
                        Upload
                    </button>
                </div>
            </React.Fragment>
        );
        }
}
const styles = {
    container :{
        justifyContent: 'center', 
        alignItems:'center',  
        display: 'flex', 
        flexDirection:'column',
        backgroundColor: ' hsla(0, 0%, 0%,0.9)' ,
        color : 'white',
        marginTop: 5
    },
    headerText:{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'red',
        borderBottom: '3px solid green',
        backgroundColor: 'black',
    }
}