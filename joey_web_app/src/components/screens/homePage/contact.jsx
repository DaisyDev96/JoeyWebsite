import React from 'react';
import Mailto from 'react-protected-mailto'
export default class Contact extends React.Component {
    render(){
        return (
            <React.Fragment >  
                <p style = {styles.text}>
                    Email: <Mailto
                    email='joeytremusic@outlook.com'
                    target = 'blank'
                    headers={
                        {subject:'Booking for Musical Talents'}, 
                        {body:'Hello Joey Tre`, I would like to talk more about booking you' }
                    }/>
                </p>
            </React.Fragment>
        );
        }
}

const styles = {
    text :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color: 'white',
        fontSize: '20px'      
    },
}