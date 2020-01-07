import React from 'react';
export default class Contact extends React.Component {
    render(){
        return (
            <React.Fragment >
                <section style = {styles.text}>
                    <p>
                        500 Terry Francois Street San Francisco, CA 94158
                    </p>
                    <p>
                        daetiana@umich.edu
                    </p>
                    <p>
                        123-456-7890
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