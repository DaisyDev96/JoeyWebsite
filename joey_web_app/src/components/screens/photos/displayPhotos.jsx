import React from 'react';

export  default class Photo extends React.Component {
    state ={
        loggedIn : false
    }
    
    render(){
        return (
            <React.Fragment >
                <div style = {{width : '30.3%', margin : 3}}>
                    <img src = {this.props.url}  style = {{resizeMode : 'cover', width : "100%", height : 400}} />

                        <section style = {{display: 'flex', flexDirection:'column' , justifyContent:'center', alignItems:'center'}}>
                            <p> {this.props.caption}</p>
                            {this.state.loggedIn === true ? (
                            <button> Delete </button>
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