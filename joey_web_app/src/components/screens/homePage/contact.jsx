import React from 'react';
export default class Contact extends React.Component {
    render(){
        return (
            <React.Fragment >
                <section style = {styles.text}>
                    <p> For Features and Bookies :  email me</p>
                    <p>
                        joeytremusic@outlook.com
                    </p>
                    
                </section>
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