import React from 'react';

export default class Bio extends React.Component {
    render(){
        return (
            <React.Fragment >
                <section style = {styles.headerText}>
                    <h1> A Story Steeped in Sound</h1>
                        <h3 style = {{textIndent:  '50px', width : "50%", marginLeft : '25%'}}>
                            JoeyTre is an influential musician and a highly acclaimed artist with critics and fans alike. 
                            Calling Chicago home, the Hip Hop Artist career of joeyTre began with a bang in 2000, with the release of their first smash hit.
                            Find out more about upcoming performances and past releases below.
                            JoeyTre is an influential musician and a highly acclaimed artist with critics and fans alike. 
                            Calling Chicago home, the Hip Hop Artist career of joeyTre began with a bang in 2000, with the release of their first smash hit.
                            Find out more about upcoming performances and past releases below.
                        </h3>
                </section>
            </React.Fragment>
        );
        }
}

const styles = {
    headerText :{
        borderBottomColor : 'green',
        textAlign: 'center',
        color : 'white',
        borderBottom: '3px solid green',
        backgroundColor: ' hsla(0, 0%, 12%,0.9)', 
        justifyContent:'center',
        alignItems:'center'
    },
}