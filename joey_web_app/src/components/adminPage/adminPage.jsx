import React from 'react';
// make an enum tomorrow for types pf ontent 
import UploadVideo from './uploadVideos'
export  class AdminPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            uploadContent :false,
            contentType : ""

        }
    }
    uploadContent = () =>{
        if(this.state.contentType === 'video'){
            return(
                <div>
                    <UploadVideo/>
                    
                </div>
            )
        }
    }
    render(){

        return (
            <React.Fragment >
                {this.state.uploadContent === false ? (
                <div>
                    <button onClick = {() => {
                        this.setState({
                            uploadContent : true,
                            contentType : 'video'
                        })
                    }}>
                        Add Video
                    </button>

                    <button onClick = {() => {
                        this.setState({
                            uploadContent : true,
                            contentType : 'pictures'
                        })
                    }}>
                        Add Pictures
                    </button>
                    
                    <button onClick = {() => {
                        this.setState({
                            uploadContent : true,
                            contentType : 'news'
                        })
                    }}>
                        Add News
                    </button>
                </div>
                ) :
                (
                    this.uploadContent()
                    
                )
                }  
            </React.Fragment>
        );
        }
}