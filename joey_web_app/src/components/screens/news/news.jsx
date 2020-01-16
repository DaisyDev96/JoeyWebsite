import React from 'react';
import Calendar from 'react-calendar';
import Subscribe from './suscribe'
export class NewsScreen extends React.Component {

    handleClick = () =>{
        alert('NO EVENT THIS DAY')
    }
    onChange = date => this.setState({ date })
    state = {
        date: new Date(),
    }
    render(){
        return (
            <React.Fragment >  
                <section style = {styles.header}>
                    <h1 style = {styles.headerText}>  COMING SOON </h1>
                    <div style = {styles.calendar}>
                        <h3 style = {{ color : 'white'}}>
                            "Issa Celebration" Dropping in February
                        </h3>
                        <p style = {{ color : 'white'}} >  Video & Single Dropping </p>
                    </div>
                </section>
                <section style = {styles.header}>
                    <h1 style = {styles.headerText}>  EVENTS </h1>
                    <div style = {styles.calendar}>
                        <Calendar 
                            onChange={this.onChange}
                            value={this.state.date}
                            onClickDay = {this.handleClick}/>
                    </div>
                </section>
                <section style = {styles.header}>
                    <h1 style = {styles.headerText}> Subscribe Form </h1>
                    <div style = {styles.calendar}>
                        <h3 style = {{ color : 'white'}}> Subscribe below to stay updated </h3> 
                    </div>   
                    <Subscribe/>
                    
                </section>

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
    videos :{
        display: "flex",
        flexDirection : 'row',
        flexWrap : 'wrap',
        overFlow: 'scroll',
    }, 
    header : {
        backgroundColor: ' hsla(0, 0%, 10%,0.9)'    
    },
    calendar:{
        display: "flex",
        textAlign: 'center',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column',
        margin : 5
    }
    
};