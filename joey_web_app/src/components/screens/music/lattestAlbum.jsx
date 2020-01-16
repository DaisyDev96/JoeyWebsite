import React from 'react';
import {database} from '../../../config/config'

export default class LatestAlbum extends React.Component {
    
    render(){
        return (
            <React.Fragment >
                <h1 style = {styles.headerText}> Latest Album</h1>
                

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
}