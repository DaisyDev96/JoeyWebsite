import React from 'react';
import { database, f, auth, storage  } from '../../../config/config';
export  default class Photo extends React.Component {
    state = {
        loggedIn : false,
        
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
        database.ref('photos/'+id).remove()
    }
    
    render(){
        return (
            <React.Fragment >
                <div style = {{width : '30.3%', margin : 3}}>
                    <img src = {this.props.url}  style = {{resizeMode : 'cover', width : "100%", height : 400}} />

                        <section style = {{display: 'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
                            <p> {this.props.caption}</p>
                            {this.state.loggedIn === true ? (
                            <button onClick = {() =>{
                                this.deletePhoto(this.props.photoId)
                            }}> Delete </button>
                        ):
                        (
                            <section></section>
                        )}
                        </section>
                </div>
            </React.Fragment>
        );
        }
}

const styles = {
    container :{
        
    }
}